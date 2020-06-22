function convertToRoman(num) {
    // M 1000
    // D 500
    // C 100
    // L 50
    // X 10
    // V 5
    // I 1
        let array = num.toString().split('');
        let len = array.length;
        let roman = "";
    
        for(let i=0; i < len;i++){
            roman = roman+convertSingle(len-i,parseInt(array[i]));
        }
    
        console.log(num,roman);
        return roman;
    }
    
    function convertSingle(digit,value){
        let ans=''
        let sm,med,big;
       
        if(digit == 4){
            for(let i=0;i<value;i++){
                ans=ans+'M';
            }
        }
        if(digit<4){
            if(digit == 3){
                sm='C'
                med='D'
                big='M'
            }
            else if(digit == 2){
                sm='X'
                med='L'
                big='C'
            }
    
            else if(digit == 1){
                sm='I'
                med='V'
                big='X'
            }
            
            if(value<=3){
                for(let i=0;i<value;i++){
                    ans=ans+sm;
                }
            }
            else if(value==4){ans=sm+med}
            
            else if(value>=5 && value <=8){
                ans=med;
                for(let i=5;i<value;i++){
                       ans=ans+sm;
                }
            }
            else if(value==9){ans=sm+big}
            
    
        }
        return ans;
    }
    
    
    
    convertToRoman(36);
    
    
    