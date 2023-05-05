type useClientType = {
    name: string;
    price: number;
    sale?: number;
}

function useClient({ 
  name, 
  price: newPrice,
  sale
}: useClientType) {

  return {
    price: newPrice,
    name,
    sale
  }
}

export {
  useClient,
};

