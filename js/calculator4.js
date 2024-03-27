function displayValueInTxtField(data){
    document.getElementById("result").value = document.getElementById("result").value + data  
  }
  
  function clearTxtFieldData(){
      document.getElementById("result").value = ''
  }
  
  function resultData(){
      var getTxtFieldValue = document.getElementById("result").value
      var finalTextFieldValue = eval(getTxtFieldValue)
      document.getElementById("result").value = finalTextFieldValue
  }