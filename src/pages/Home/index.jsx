import '../Home/styles.css'

import { Card } from '../../components/card'
import React, { useState, useEffect } from 'react'


export function Home() {
  const [studantName, setStudantName] = useState('')  // usamos essa função para pegar o estado começando com string 
  const [students, setStudents] = useState([]) // usamos vetor para pegar todos os studantes adicionados a listagem
  const [user, setUser] = useState({name: '', avatar: ''})

  function handleAddStundent() { // função criada para enviar o nome e o time para listagem 
    const newStudent = {
      name: studantName,
      time: new Date().toLocaleTimeString('pr-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    setStudents(prevState => [...prevState, newStudent]) // prevState server para guardar os stados e nao substituir, sempre deve ter "..."(pread operator) para copiar toda parte de um array ou objeto.
  }

  //useEffect é executado assim que os componentes são renderizados
    useEffect(() => {
      fetch('https://api.github.com/users/lucas-lcs')
      .then(reponse => reponse.json())
      .then(data => {
        setUser({
          name: data.name,
          avatar: data.avatar_url
        })
      })

    }, [])
  return (


    <div className='container'>
      <header>
      <h1>Lista de Presença</h1>
      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="Foto de perfil" />
      </div>
      </header>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={e => setStudantName(e.target.value)}
        />
      <button
        type="button" onClick={handleAddStundent}>
        Adicionar
      </button>

      {
        students.map(student => (
          <Card
          key={student.time}
          name={student.name}
          time={student.time} />)
        )
      }
    </div>
  )
}


