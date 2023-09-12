
export default function Cabecalho(props){

    return(
        <>
            <header class="cabecalho">

       <nav>
        <ul>
          {/*aqui terão os links para navegar pelo menu */}
            <li class="cabecalho__item-menu"> <a href="sobre.html#contato"> Início </a> </li>
            <li class="cabecalho__item-menu"> <a href="#"> Planos </a> </li>
            <li class="cabecalho__item-menu" > <a href="#" id="cabecalho_main"> Bisafe </a> </li>
            <li class="cabecalho__item-menu"> <a href="#"> Cadastro </a> </li>
            <li class="cabecalho__item-menu"> <a href="#"> Registre-se </a> </li>
        </ul>
       </nav>
        {props.children}
     </header>
        </>
    )
}
