let name = prompt('Enter your name','');

    function reverseName (name){
        return name.split("").reverse().join("");
    }

    function UpLow (name){
        let nameNew = '';
        for (let i = 0; i < name.length; i++){
            if (i%2===0){
                nameNew += name[i].toUpperCase()
            }
            else{
                nameNew += name[i].toLowerCase()
            }
        }
        alert(nameNew)
    }

    function checkName(name){
        
        if (/^[a-zA-Z]+$/.test(name)){
            alert(reverseName(name))
        }
        else {
            alert(UpLow(name))
        }
        
    }

    checkName(name);
