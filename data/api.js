export default function(formData) {
  const http = new XMLHttpRequest()
  const sendData = JSON.stringify(formData)
  const ntf = 'ntforder'
  http.open('POST', `https://vekservis.ru/order/${ntf}.php`, true)

  //Send the proper header information along with the request
  http.setRequestHeader('Content-type', 'application/json')

  http.onreadystatechange = function() {
    //Call a function when the state changes.
    if (http.readyState == 4 && http.status == 200) {
      console.log(http.responseText)
    }
  }
  http.send(sendData)
}
