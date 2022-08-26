
let studentInfo = document.getElementById('students')
let looding = document.getElementById('looding')
let sortlink = document.getElementById('serchlink')
let searchInput = document.getElementById('search-input')
let tryagen  = document.getElementById('SWWPTA')
let notfound = document.getElementById('TSYLFINITD')

const clearifo = ()=>{
    studentInfo.innerHTML = " "
}

const desplyStudentInfo = async () =>{
    looding.hidden = false
   try{
    const {data} = await axios.get('/api/v1/student')
    if(data === null){
        notfound.hidden = false
    }else{

        const allStudents = Object.entries(data).map((mapedData)=>{
            const temp = mapedData[1]
            return `
                <div #info>
                    <table>
                        <tr id='test'>
                            <td><p>ID</p></td>
                            <td colspan="3">${temp.id}</td>
                        </tr>
                        <tr>
                            <td><b>Name</b></td>
                            <td>${temp.name}</td>
                            <td><b>Departemnt:</b></td>
                            <td>${temp.departemnt}</td>
                        </tr>
                        <tr>
                            <td><b>Age:</b></td>
                            <td>${temp.age}</td>
                            <td><b>Saction:</b></td>
                            <td>${temp.saction}</td>
                        </tr>
                        <tr>
                            <td><b>sex:</b></td>
                            <td>${temp.sex}</td>
                            <td><b>IrollmentDate:</b></td>
                            <td>${temp.inrollmentDate}</td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                <a href="editform.html?id=${temp.id}&eid=${temp._id}"><i class="fa fa-edit"></i></a>
                                <a href = ""<i class="fa fa-remove" data-id=${temp._id}></i></a>
                            </td>
                        </tr>         
                    </table>
                </div>
            `
        })
        notfound.hidden = true
        studentInfo.innerHTML = allStudents
        
    }
   }catch(err){

   }
   looding.hidden = true
    
}
desplyStudentInfo()

sortlink.addEventListener('click', async(e)=>{
    try {
        let el = e.target
    if(el.classList.contains('sort')){
        let sort = el.dataset.sort
        let {data} = await axios.get(`/api/v1/student?sort=${sort}`)
        
        let sortedData = Object.entries(data).map((mapedData)=>{
            const temp = mapedData[1]
            return `
                <div #info>
                    <table>
                        <tr id='test'>
                            <td><p>ID</p></td>
                            <td colspan="3">${temp.id}</td>
                        </tr>
                        <tr>
                            <td><b>Name</b></td>
                            <td>${temp.name}</td>
                            <td><b>Departemnt:</b></td>
                            <td>${temp.departemnt}</td>
                        </tr>
                        <tr>
                            <td><b>Age:</b></td>
                            <td>${temp.age}</td>
                            <td><b>Saction:</b></td>
                            <td>${temp.saction}</td>
                        </tr>
                        <tr>
                            <td><b>sex:</b></td>
                            <td>${temp.sex}</td>
                            <td><b>IrollmentDate:</b></td>
                            <td>${temp.inrollmentDate}</td>
                        </tr> 
                        <tr>
                            <td colspan="4">
                                <a href="editform.html?id=${temp.id}&eid=${temp._id}"><i class="fa fa-edit"></i></a>
                                <i class="fa fa-remove" data-id=${temp._id}></i>
                            </td>
                        </tr>            
                    </table>
                </div>
            `
        })
        tryagen.hidden = true
        studentInfo.innerHTML = sortedData
    }
    } catch (error) {
        tryagen.hidden = false 
        setTimeout(() => {
            tryagen.hidden = true
        }, 5000);
    }
})

const sarchStudentIfo = async()=>{
    try {
            notfound.hidden = true
            clearifo()
            looding.hidden = false
            const value = searchInput.value
            const {data} = await axios.get(`/api/v1/student?id=${value}`)
            if(data === null){
                clearifo()
                looding.hidden = true
                notfound.hidden = false
                setTimeout(() => {
                    notfound.hidden = true
                    desplyStudentInfo()
                }, 5000);
            }else{
                const resalt = 
                `<div #info>
                    <table>
                        <tr id='test'>
                            <td><p>ID</p></td>
                            <td colspan="3">${data.id}</td>
                        </tr>
                        <tr>
                            <td><b>Name</b></td>
                            <td>${data.name}</td>
                            <td><b>Departemnt:</b></td>
                            <td>${data.departemnt}</td>
                        </tr>
                        <tr>
                            <td><b>Age:</b></td>
                            <td>${data.age}</td>
                            <td><b>Saction:</b></td>
                            <td>${data.saction}</td>
                        </tr>
                        <tr>
                            <td><b>sex:</b></td>
                            <td>${data.sex}</td>
                            <td><b>IrollmentDate:</b></td>
                            <td>${data.inrollmentDate}</td>
                        </tr>   
                        <tr>
                            <td colspan="4">
                                <a href="editform.html?id=${data.id}&eid=${data._id}"><i class="fa fa-edit"></i></a>
                                <i class="fa fa-remove" data-id=${data._id}></i>
                            </td>
                        </tr>             
                    </table>
                </div>
                `
            studentInfo.innerHTML = ''
            looding.hidden = true
            notfound.hidden = true
            studentInfo.innerHTML = resalt
        }

    } catch (error) {
        tryagen.hidden = false
    }
}

studentInfo.addEventListener('click',async(e)=>{
    const el = e.target
    if(el.classList.contains('fa-remove')){
        try {
            const confirm = window.confirm("are you shour you whan to delete this student")
            if(confirm){
                await axios.delete(`/api/v1/student/${el.dataset.id}`)
                desplyStudentInfo();
            }else{
                
                console.log('proces aborted')
            }
        } catch (error) {
            console.log(error)
        }

    }
})

