//Importa React e hooks useState e useMemo
import React, { useStates, useMemo } from "react";
//Importa o componente list
import List from "./List";

//Função que Tranforma um array de strings em objetos com chave e valor
function mapItems(items) {
    return items.map((value, i) => ({key: i.toString(), value}));
}

//Cria um array com 100 itens no formato: "Item 0", "Item 1", etc.
const array = new Array(100)
    .fill(null)
    .map((v, i) => `Item ${i}`);

//Função que filtra e ordena o array com base em um texto e se é ascendente ou não
function filterAndSort(text, asc) {
    return array
    .filter((i) => text.length === 0 || i.includes(text))//Filtra os itens pleo texto digitado
    .sort(
        asc
            ? (a, b) => (a > b ? 1 : a < b ? -1 : 0)//Ordenação crescente
            : (a, b) => (b > a ? 1 : b < a ? -1 : 0)//Ordenação decrescente
    );
}

//Componente principal que gerencia o estado e lógida da lista
export default function ListContainer() {
    const [asc, setAsc] = useState(true);//Estado de ordenação: crescente ou decrescente
    const [filter, setFilter] = useState("")//Estado do texto de filtro

    //Memoriza os dados filtrados e ordenados sempre que filter ou asc mudam
    const data = useMemo(() => {
        return filterAndSort(filter, asc);
    }, [filter, asc]);

    //Renderiza o componente List passando os dados e funções de controle
    return (
        <List
            data={mapItems(data)}//Mapeia os dados para o formato esperado pela flatList
            asc={asc}
            onFilter={(text)=>{
                setFilter(text);//Atualiza o filtro com o text digitado
            }}
            onSort={() => {
                setAsc(!asc);//Inverte a ordenação ao cilcar no botão de ordenação
            }}
        />
    );
}