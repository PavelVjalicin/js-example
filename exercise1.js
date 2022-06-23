function isPartyViable(guests) {
    let paidForTicketTotal = 0
    let attendance =0 
    let index = guests.length - 1
    for (let i=0; i<=index; i++) {
      paidForTicketTotal += guests[i]['paidForTicket']
      console.log(paidForTicketTotal)
      attendance = attendance + 1
    }
    if (paidForTicketTotal >= 100 && attendance >= 5) {
      return true
    }else{
      return false
    }
}

console.log(isPartyViable([{paidForTicket:10}, {paidForTicket: 15}]))