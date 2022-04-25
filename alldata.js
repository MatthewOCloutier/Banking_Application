

function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <Card
    header="All Data"
    txtcolor="black"
  
    body={
        <h1>{JSON.stringify(ctx)}</h1>
    }   />
</>
);
}