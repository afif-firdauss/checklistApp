import React, { useEffect } from 'react'
import dataServices from '../../config/Services/data.services';

export default function Home() {
  const [name, setName] = React.useState('')
  const [item, setItem] = React.useState()
  

  useEffect(() => {
    dataServices.getChecklist().then(res => {
      // console.log(res, 'res');
      setItem(res.data.data)
    })
  }, []);

  const addChecklist = () => {
    if(name !== ''){
      dataServices.addChecklist(name).then(res => {
        // console.log(res);
        window.location.reload()
      })
    } else {
      alert('Please fill the name')
    }
  }

  const deleteChecklist = (id) => {
    dataServices.removeChecklist(id).then(res => {
      // console.log(res);
      window.location.reload()
    })
  }

  return (
    <div style={{marginTop: '150px', marginLeft: '40px'}}>
      <ol>
        {
          item !== undefined && item.map((item, index) => {
            // console.log(item.id, 'item')
            return (
              <div className="d-flex justify-content-between w-25">
                <li key={index}>
                  {item.name}
                </li>
                <button onClick={() => deleteChecklist(item.id)}>Delete</button>
              </div>
            )
          })
        }
      </ol>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        />
      <button onClick={addChecklist}>Tambah Checklist</button>
    </div>
  )
}
