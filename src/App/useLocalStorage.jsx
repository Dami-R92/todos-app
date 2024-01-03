import React from 'react'

function useLocalStorage(itemName, initialValue) {
	// const stringifiedTodos = JSON.stringify(defaultTodos);
	// localStorage.setItem(itemName, stringifiedTodos);

	const localStorageItem = localStorage.getItem(itemName);

	let parsedItem;
	if (!localStorageItem) {
		localStorage.setItem(itemName, JSON.stringify(initialValue));
		parsedItem = initialValue;
	} else {
		parsedItem = JSON.parse(localStorageItem);
	}

	const [item, setItem] = React.useState(parsedItem);

	const saveTodos = (newItem) => {
		localStorage.setItem(itemName, JSON.stringify(newItem));
		setItem(newItem);
	}

	//Retorno mi item, que seria el estado react, y el saveItem para actualizarlo tanto el SetItem dentro de React como en el localStroage.
	return [item, saveTodos];
}
export default useLocalStorage

// const defaultTodos = [
// 	{ text: 'cortar cebollas', completed: false },
// 	{ text: 'terminar curso de ReactJS', completed: false },
// 	{ text: 'comprar panchitos', completed: true },
// 	{ text: 'comprar lechuga', completed: true },
// 	{ text: 'Atornillar el taparrollos', completed: false },
// 	{ text: 'Comprar Off', completed: false },

// ];
// const stringifiedTodos = JSON.stringify(defaultTodos);
// localStorage.setItem('TODOS_V1', stringifiedTodos);

// localStorage.removeItem(itemName)
