const sid = document.getElementById('id')
const inroll = document.getElementById('inrolldate')
const sname = document.getElementById('name')
const age = document.getElementById('age')
const sex = document.getElementById('sex')
const saction = document.getElementById('saction')
const departemnt = document.getElementById('departemnt')
const succes = document.getElementById('succes')
const search = document.getElementById('search')
const notfound = document.getElementById('notfound')
const searchinput = document.getElementById('searchinput')
const params = window.location.search
const id = new URLSearchParams(params).get('id')
const eid = new URLSearchParams(params).get('eid')


           

const populatFeald = async()=>{
    try {
        if(id){
            const {data} = await axios.get(`/api/v1/student?id=${id}`)
            
            sid.value = data.id
            inroll.value = data.inrollmentDate
            sname.value = data.name
            age.value = data.age
            sex.value = data.sex
            saction.value = data.saction
            departemnt.value = data.departemnt
        }else{
            search.hidden = false
        }
    } catch (error) {
        console.log(error)
    }
}

populatFeald()
const nid = sid.value 
const ninr = inroll.value 
const nname = sname.value 
const nage = age.value 
const nsex = sex.value 
const nsacton = saction.value 
const ndp = departemnt.value 

const done = async()=>{
    const conferm = window.confirm("are you shour you want to countnue")
    if(conferm){
        if(id){
            try {
                const test = await axios.patch(`/api/v1/student/${eid}`,{
                    name: sname.value,
                    age: age.value,
                    sex: sex.value,
                    saction: saction.value,
                    departemnt: departemnt.value
                })
                succes.hidden = false
                setTimeout(() => {
                    succes.hidden = true
                }, 5000);
            } catch (error) {
              console.log(error)
            }
        }else{
            try {
                
                const test = await axios.patch(`/api/v1/student/${data._id}`,{
                    name: sname.value,
                    age: age.value,
                    sex: sex.value,
                    saction: saction.value,
                    departemnt: departemnt.value
                })
                searchinput.value = ""
                succes.hidden = false
                setTimeout(() => {
                    succes.hidden = true
                }, 5000);
            } catch (error) {
              console.log(error)
            }
        }
        
    }
}

const cancel = ()=>{
    if(id){
        populatFeald()
    }else{
        searcB()
    }
}

const searcB = async()=>{
    const {data} = await axios.get(`/api/v1/student?id=${searchinput.value}`)
    if(data === null){
        notfound.hidden = false
        setTimeout(() => {
            notfound.hidden = true
        }, 5000);
    }else{
        console.log(data)
        sid.value = data.id
        inroll.value = data.inrollmentDate
        sname.value = data.name
        age.value = data.age
        sex.value = data.sex
        saction.value = data.saction
        departemnt.value = data.departemnt
        notfound.hidden = true
    }

            
}