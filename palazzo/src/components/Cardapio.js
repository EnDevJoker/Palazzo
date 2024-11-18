import { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import ba from '../assets/ba.png'
import bm from '../assets/bm.jpg'
import pf from '../assets/pf.jpg'
import fm from '../assets/fm.jpg'
import pcf from '../assets/pcf.jpg'
import fg from '../assets/fg.jpg'
import mc from '../assets/mc.jpg'
import ca from '../assets/ca.jpg'
import fritas from '../assets/fritas.png'
import maionese from '../assets/maionese.png'
import salada from '../assets/salada.png'
import pure from '../assets/pure.png'
import ovo from '../assets/ovo.png'
import Modal from './Modal.js'
import guaravita from '../assets/guaravita.png';


function Cardapio () {

    const [cart, setCart] = useState([]); // Estado para os itens no carrinho
    const [cartCount, setCartCount] = useState(0); // Contagem de itens no carrinho
    const [cartTotal, setCartTotal] = useState(0); // Total do carrinho
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a visibilidade do modal

    // Função para adicionar ou atualizar itens no carrinho
    const addToCart = (name, price) => {
        setCart(prevCart => {
            const existingItem = prevCart.find((item) => item.name === name);
    
            if (existingItem) {
                // Se o item já existe no carrinho, aumente a quantidade
                existingItem.quantity += 1;
                return [...prevCart];
            } else {
                // Se o item não existe, adicione um novo item com quantidade 1
                return [...prevCart, { name, price, quantity: 1 }];
            }
        });
    
        // Atualizando o contador e o total do carrinho
        setCartCount(prevCount => prevCount + 1);
        setCartTotal(prevTotal => prevTotal + parseFloat(price));
    };

    // Função para alternar a visibilidade do modal
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

return(
    <>
        <h2 className="text-2xl md:text-3xl font-bold text-center mt-9 mb-6">Conheça nosso cardápio</h2>
    <div id="menu">
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16">
        {/*Inserir os produtos*/}
        <div className="flex gap-2">
                <img src={ba} alt=""
                className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
    
                <div>
                <p className="font-bold text-white">Bife Acebolado</p>
                    <p className="text-sm">Delicioso bife acebolado com fritas, servido com Arroz, Feijão e Farofa.</p>
                    <div className="flex items-center gap-2 justify-between mt-3">
                            <p className="font-bold">R$ 15,00</p>
                            <button className="bg-gray-900 px-5 rounded add-to-cart-btn text-white" 
                            onClick={() => addToCart('Bife Acebolado', '15.00')}>
                            <FaCartPlus className="text-white text-lg"/></button>    
                        </div>
                        </div>

                        </div>


        <div className="flex gap-2">
                        <img src={bm} alt=""
                className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
                <div>

                    <p className="font-bold">Bife a Milanesa</p>
                    <p className="text-sm">Bife a Milanesa acompanhado com Fritas, Arroz, Feijão e Farofa.</p>


                        <div className="flex items-center gap-2 justify-between mt-3">
                            <p className="font-bold">R$ 15,00</p>
                            <button className="bg-gray-900 px-5 rounded add-to-cart-btn" 
                            
                            
                            onClick={() => addToCart('Bife a Milanesa', '15.00')}>
                                <FaCartPlus className="text-white text-lg"/>
                                
                                </button>
                        </div>
                </div>

        </div>

        <div className="flex gap-2">
                        <img src={pf} alt=""
                className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
                <div>

                    <p className="font-bold">Filézinho de Peixe Frito</p>
                    <p className="text-sm">Filezinho de Peixe Frito acompanhado com Fritas, Arroz, Feijão.</p>


                        <div className="flex items-center gap-2 justify-between mt-3">
                            <p className="font-bold">R$ 15,00</p>
                            <button className="bg-gray-900 px-5 rounded add-to-cart-btn" 
                            
                            
                            onClick={() => addToCart('Peixe Frito', '15.00')}>
                                <FaCartPlus className="text-white text-lg"/>
                                
                                </button>
                                
                        </div>
                </div>

        </div>

        <div className="flex gap-2">
                <img src={fm} alt=""
                className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
    
                <div>
                <p className="font-bold text-white">Frango a Milanesa</p>
                    <p className="text-sm">Frango a Milanesa acompanhado com Fritas, Arroz, Feijão e Farofa.</p>
                    <div className="flex items-center gap-2 justify-between mt-3">
                            <p className="font-bold">R$ 14,00</p>
                            <button className="bg-gray-900 px-5 rounded add-to-cart-btn text-white" 
                            onClick={() => addToCart('Frango a Milanesa', '14.00')}> 
                            <FaCartPlus className="text-white text-lg"/></button>    
                        </div>
                        </div>

                        </div>


        <div className="flex gap-2">
                        <img src={fg} alt=""
                className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
                <div>

                    <p className="font-bold">Frango Grelhado</p>
                    <p className="text-sm">Frango Grelhado acompanhado com Fritas, Arroz, Feijão e Farofa.</p>


                        <div className="flex items-center gap-2 justify-between mt-3">
                            <p className="font-bold">R$ 14,00</p>
                            <button className="bg-gray-900 px-5 rounded add-to-cart-btn" 
                            onClick={() => addToCart('Frango Grelhado', '14.00')}>
                                <FaCartPlus className="text-white text-lg"/>
                                
                                </button>
                        </div>
                </div>

        </div>

        <div className="flex gap-2">
                        <img src={pcf} alt=""
                className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
                <div>

                    <p className="font-bold">Picadinho de Frango</p>
                    <p className="text-sm">Frango Picado acompanhado com Fritas, Arroz, Feijão e Farofa.</p>


                        <div className="flex items-center gap-2 justify-between mt-3">
                            <p className="font-bold">R$ 14,00</p>
                            <button className="bg-gray-900 px-5 rounded add-to-cart-btn" 
                            
                            onClick={() => addToCart('Picadinho de Frango', '14.00')}>
                                <FaCartPlus className="text-white text-lg"/>
                                
                                </button>
                                
                        </div>
                </div>

        </div>

        <div className="flex gap-2">
                        <img src={ca} alt=""
                className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
                <div>

                    <p className="font-bold">Calabresa Acebolada</p>
                    <p className="text-sm">Calabresa Acebolada acompanhada com Arroz, Feijão e Farofa.</p>


                        <div className="flex items-center gap-2 justify-between mt-3">
                            <p className="font-bold">R$ 12,00</p>
                            <button className="bg-gray-900 px-5 rounded add-to-cart-btn" 
                            onClick={() => addToCart('Calabresa Acebolada', '12.00')}>
                                <FaCartPlus className="text-white text-lg"/>
                                
                                </button>
                        </div>
                </div>

        </div>

        <div className="flex gap-2">
                        <img src={mc} alt=""
                className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
                <div>

                    <p className="font-bold">Macarrão C/ Linguiça</p>
                    <p className="text-sm">Macarrão C/ Linguiça acompanhado com Feijão e Farofa.</p>


                        <div className="flex items-center gap-2 justify-between mt-3">
                            <p className="font-bold">R$ 11,00</p>
                            <button className="bg-gray-900 px-5 rounded add-to-cart-btn" 
                            
                            onClick={() => addToCart('Macarrão C/ Linguiça', '11.00')}>
                                <FaCartPlus className="text-white text-lg"/>
                                
                                </button>
                                
                        </div>
                </div>

        </div>
        
        

    </main>    
    </div>

    <h1 className="text-2xl md:text-3xl font-bold text-center mt-9 mb-6">
                Bebidas
            </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16" id="menu">
        <div className="flex gap-2">
                <img src={guaravita} alt=""
                className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
    
                <div>
                <p className="font-bold text-white">Guaravita</p>
                    <div className="flex items-center gap-2 justify-between mt-3">
                            <p className="font-bold">R$ 2,00</p>
                            <button className="bg-gray-900 px-5 rounded add-to-cart-btn text-white" 
                            onClick={() => addToCart('Guaravita', '2.00')}>
                            <FaCartPlus className="text-white text-lg"/>
                            </button>    
                        </div>
                        </div>

                        </div>
                        </div>

                        <h1 className="text-2xl md:text-3xl font-bold text-center mt-9 mb-6">
                Adicionais
            </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16" id="menu">
        <div className="flex gap-2">
                <img src={maionese} alt=""
                className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
    
                <div>
                <p className="font-bold text-white">Salada Maionese</p>
                    <div className="flex items-center gap-2 justify-between mt-3">
                            <p className="font-bold">R$ 4,00</p>
                            <button className="bg-gray-900 px-5 rounded add-to-cart-btn text-white" 
                            onClick={() => addToCart('Salada Maionese', '4.00')}>
                            <FaCartPlus className="text-white text-lg"/>
                            </button>    
                        </div>
                        </div>

                        </div>

                        <div className="flex gap-2">
                <img src={fritas} alt=""
                className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
    
                <div>
                <p className="font-bold text-white">+++Fritas</p>
                    <div className="flex items-center gap-2 justify-between mt-3">
                            <p className="font-bold">R$ 4,00</p>
                            <button className="bg-gray-900 px-5 rounded add-to-cart-btn text-white" 
                            onClick={() => addToCart('+++Fritas', '4.00')}>
                            <FaCartPlus className="text-white text-lg"/>
                            </button>    
                        </div>
                        </div>

                        </div>

                        <div className="flex gap-2">
                <img src={pure} alt=""
                className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
    
                <div>
                <p className="font-bold text-white">Purê de Batata</p>
                    <div className="flex items-center gap-2 justify-between mt-3">
                            <p className="font-bold">R$ 4,00</p>
                            <button className="bg-gray-900 px-5 rounded add-to-cart-btn text-white" 
                            onClick={() => addToCart('Purê de Batata', '4.00')}>
                            <FaCartPlus className="text-white text-lg"/>
                            </button>    
                        </div>
                        </div>

                        </div>

                        <div className="flex gap-2">
                <img src={salada} alt=""
                className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
    
                <div>
                <p className="font-bold text-white">Salada Verde</p>
                    <div className="flex items-center gap-2 justify-between mt-3">
                            <p className="font-bold">R$ 3,00</p>
                            <button className="bg-gray-900 px-5 rounded add-to-cart-btn text-white" 
                            onClick={() => addToCart('Salada Verde', '3.00')}>
                            <FaCartPlus className="text-white text-lg"/>
                            </button>    
                        </div>
                        </div>

                        </div>

                        <div className="flex gap-2">
                <img src={ovo} alt=""
                className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
    
                <div>
                <p className="font-bold text-white">Ovo Frito</p>
                    <div className="flex items-center gap-2 justify-between mt-3">
                            <p className="font-bold">R$ 2,00</p>
                            <button className="bg-gray-900 px-5 rounded add-to-cart-btn text-white" 
                            onClick={() => addToCart('Ovo Frito', '2.00')}>
                            <FaCartPlus className="text-white text-lg"/>
                            </button>    
                        </div>
                        </div>

                        </div>
                        

                        </div>
    {/* Botão do carrinho */}

    
    <footer className="w-full bg-red-500 py-2 fixed bottom-0 z-40 flex items-center justify-center">
                <button 
                    className="flex items-center gap-2 text-white font-bold" 
                    onClick={toggleModal}>
                    <FaCartPlus className="fa fa-cart-plus text-lg text-white" />
                    Veja meu carrinho
                    <i className="fa fa-cart-plus text-lg text-white"></i>
                    {cartCount > 0 && <span className="text-sm">{cartCount}</span>}
                </button>
            </footer>

            {/* Modal do Carrinho */}

            <Modal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        cart={cart}
        cartTotal={cartTotal}
        cartCount={cartCount}
      />
            
        </>
    );
}
export default Cardapio;