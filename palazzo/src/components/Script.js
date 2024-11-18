import React, { useState, useEffect } from "react";

function Script() {
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [changeAmount, setChangeAmount] = useState("");
  const [isRestaurantOpen, setIsRestaurantOpen] = useState(checkRest());
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");

  // Função que verifica se o restaurante está aberto
  function checkRest() {
    const currentHour = new Date().getHours();
    return currentHour >= 10 && currentHour <= 15;
  }

  // Atualizar o total do carrinho
  const updateCart = () => {
    let total = 0;
    let itemCount = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
      itemCount += item.quantity;
    });

    return { total, itemCount };
  };

  // Adicionar item ao carrinho
  const addToCart = (name, price) => {
    const existingItem = cart.find((item) => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { name, price, quantity: 1 }]);
    }
  };

  // Remover item do carrinho
  const removeItemFromCart = (name) => {
    const updatedCart = cart.filter((item) => item.name !== name);
    setCart(updatedCart);
  };

  // Função para enviar pedido via WhatsApp
  const checkout = () => {
    if (!isRestaurantOpen) {
      alert("Restaurante Fechado no momento!");
      return;
    }

    if (cart.length === 0) return;

    const total = updateCart().total;
    let message = `Pedido de: ${address}\nTotal a Pagar: ${total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;

    const encodedMessage = encodeURIComponent(message);
    const phone = "+5521986473364"; // Alterar para o número desejado
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  };

  // Manipular CEP para preencher o endereço
  const searchCep = async () => {
    const cleanedCep = cep.replace(/\D/g, "");
    if (cleanedCep.length !== 8) {
      alert("Por favor, insira um CEP válido.");
      return;
    }

    const url = `https://viacep.com.br/ws/${cleanedCep}/json/`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAddress(data.logradouro || "");
      setBairro(data.bairro || "");
    } catch (error) {
      alert("Erro ao buscar o CEP. Tente novamente.");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => setIsRestaurantOpen(checkRest()), 60000); // Atualiza o estado do restaurante a cada minuto
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div id="menu">
        {/* Exemplo de um item do menu */}
        <button onClick={() => addToCart("Item 1", 20)} data-name="Item 1" data-price="20">
          Adicionar Item 1
        </button>
        {/* Adicione outros itens de menu aqui */}
      </div>

      {/* Modal de Carrinho */}
      {cartVisible && (
        <div id="cart-modal" style={{ display: "flex" }}>
          <div id="cart-items">
            {cart.map((item) => (
              <div key={item.name} className="flex justify-between">
                <div>
                  <p>{item.name}</p>
                  <p>Quantidade: {item.quantity}</p>
                  <p>R$ {item.price.toFixed(2)}</p>
                </div>
                <button onClick={() => removeItemFromCart(item.name)}>Remover</button>
              </div>
            ))}
          </div>
          <div>
            <p>Total: {updateCart().total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
            <button onClick={() => setCartVisible(false)}>Fechar</button>
          </div>
        </div>
      )}

      {/* Carrinho - botão para abrir */}
      <button onClick={() => setCartVisible(true)}>Abrir Carrinho</button>

      {/* Informações de Endereço e CEP */}
      <input
        type="text"
        id="cep"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        onBlur={searchCep}
        placeholder="Digite seu CEP"
      />
      <input
        type="text"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Endereço"
      />
      <input
        type="text"
        id="bairro"
        value={bairro}
        onChange={(e) => setBairro(e.target.value)}
        placeholder="Bairro"
      />

      {/* Botão de Checkout */}
      <button onClick={checkout}>Finalizar Pedido</button>

      {/* Status de Funcionamento */}
      <div>
        <span
          style={{
            backgroundColor: isRestaurantOpen ? "green" : "red",
            padding: "5px",
            color: "white",
          }}
        >
          {isRestaurantOpen ? "Aberto" : "Fechado"}
        </span>
      </div>

      {/* Método de Pagamento */}
      <select onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod}>
        <option value="">Escolha um método</option>
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão">Cartão</option>
      </select>

      {/* Exibir campo de troco se o pagamento for em dinheiro */}
      {paymentMethod === "Dinheiro" && (
        <input
          type="text"
          placeholder="Valor para troco"
          value={changeAmount}
          onChange={(e) => setChangeAmount(e.target.value)}
        />
      )}
    </div>
  );
}

export default Script;
