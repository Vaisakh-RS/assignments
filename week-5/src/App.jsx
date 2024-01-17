import Form from './Form.jsx'
export default function App({name,desc,interest1,interest2,interest3})
{
  return(
    <div>
    <Form/>
    <h1>{name}</h1>
    <h2>{desc}</h2>
    <div>
      <h3>Interests</h3>
      <ul>
        <li>{interest1}</li>
        <li>{interest2}</li>
        <li>{interest3}</li>
      </ul>
    </div>
  </div>
  )
  
}