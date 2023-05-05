type MyFunctionType = {
    name: string;
}

function MyFunction({ name }: MyFunctionType) {

  return (
    <div>{name}</div>
  )
}

export {
  MyFunction
};