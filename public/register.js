const studintID = document.getElementById('id');
const studintName = document.getElementById('name');
const studintAge = document.getElementById('age');
const studintSex = document.getElementById('sex');
const studintSaction = document.getElementById('saction');
const studintDepartemnt = document.getElementById('departemnt');
const idalredyExists = document.getElementById('alredyExists');
const inputError = document.getElementById('error');
const succes = document.getElementById('succes');



const cancel = ()=>{
    studintID.value = ""
    studintName.value = ""
    studintAge.value = ""
    idalredyExists.hidden = true
    inputError.hidden = true


}


const submit = async ()=>{
    try {
       let testIfExsist;

       if(studintID.value){
        testIfExsist = await axios.get(`/api/v1/student?id=${studintID.value}`);
       }

       if(studintAge.value && studintID.value && studintName.value){
        
        if(testIfExsist != undefined){
            
            if(testIfExsist.data === null){
            
                await axios.post('/api/v1/student',{
                    id: studintID.value,
                    name: studintName.value,
                    age: studintAge.value,
                    sex: studintSex.value,
                    saction: studintSaction.value,
                    departemnt: studintDepartemnt.value
                }) 
            
                succes.hidden = false
            
                setTimeout(() => {
                    succes.hidden = true
                }, 5000);
           
                cancel()
            }else{
           
                idalredyExists.hidden = false;
           
                setTimeout(() => {
                    idalredyExists.hidden = true
                }, 5000);
            }
        }
       
    }else{
    
        inputError.hidden = false
    
        setTimeout(() => {
                inputError.hidden = true
            }, 5000);
       }
      
       
    } catch (error) {
        console.log(error)
    }
}