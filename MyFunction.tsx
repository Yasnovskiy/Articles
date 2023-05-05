type MyFunctionType = {
    name: string;
    price: number;
}

function MyFunction({ name, price }: MyFunctionType) {

  return (
    <>
      <div>{name}</div>
      <div>{price}</div>
    </>
  )
}

export {
  MyFunction
};