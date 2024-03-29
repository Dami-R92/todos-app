import React from 'react'

function useLocalStorage(itemName, initialValue) {

	const [item, setItem] = React.useState(initialValue);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);

	
	React.useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName);
			
				let parsedItem;
		
				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localStorageItem);
					setItem(parsedItem);
				}
				setLoading (false);
			}
			catch(error) {
				setLoading(false);
				setError(error);
			}
		},2000)
	}, []);


	const saveTodos = (newItem) => {
		localStorage.setItem(itemName, JSON.stringify(newItem));
		setItem(newItem);
	}

	//Retorno mi item, que seria el estado react, y el saveItem para actualizarlo tanto el SetItem dentro de React como en el localStroage.
	return  {
		item,
		saveTodos,
		loading,
		error
	};
}
export  {useLocalStorage};


// localStorage.removeItem('TODOS_V1')

// const defaultTodos = [
// 	{ text: 'cortar cebollas', completed: false, priority: 'Baja' },
// 	{ text: 'terminar curso de ReactJS', completed: false, priority: 'Alta' },
// 	{ text: 'comprar panchitos', completed: true, 	priority: 'Media' },
// 	{ text: 'comprar lechuga', completed: true, 	priority: 'Alta' },


// ];
// const stringifiedTodos = JSON.stringify(defaultTodos);
// localStorage.setItem('TODOS_V1', stringifiedTodos);


	// const stringifiedTodos = JSON.stringify(defaultTodos);
	// localStorage.setItem(itemName, stringifiedTodos);
