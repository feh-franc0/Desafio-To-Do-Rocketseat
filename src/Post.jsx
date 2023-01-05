export function Post(props) {
  return (
    <div>
      <p><strong>Nome: </strong>{props.name}</p>
      <p><strong>idade: </strong>{props.years}</p>
      <p><strong>desc: </strong>{props.content}</p>
    </div>
  )
}
