function checkage(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;

    const errorTag = document.getElementById('error');
    try {
        const age = parseInt(ageText);
        if (isNaN(age)) {
            throw ' Plealse Enter a number';
        }
        else if (age < 18) {
            throw ' Baccha kaccha not allowed';
        }
        else if (age > 30) {
            throw ' Murubbira not allowed';
        }
        
        errorTag.innerHTML = '';
               
    } 
    catch (err) {
        console.log('ERROR', err);
        errorTag.innerHTML = 'ERROR:' + err;
    }
    finally{
        console.log('All Done inside try catch');
    }

    
    
}

