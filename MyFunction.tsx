type MyFunctionType = {
    name: string;
    price: number;
    sale?: number;
}

function MyFunction({ 
  name, 
  price,
  sale
}: MyFunctionType) {

  return (
    <>
      <div>{name}</div>
      <div>{price}</div>
      <div>{sale}</div>
    </>
  )
}

export {
  MyFunction
};