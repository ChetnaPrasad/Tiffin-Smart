const { StyleSheet } = require("react-native");

export const ButtonStyle = StyleSheet.create({
 buttonView:{
     width:"104%",
     borderRadius:29,
     height:"42%",
     backgroundColor:"#383F51",
    padding:5,
},
buttonlabel:{
    color:"white",
    fontSize:20,
    textAlign:"center",
    marginTop:"2%"
},
buttonSquareView:{
    width:"95%",
    borderRadius:10,
    height:40,
    backgroundColor:"#383F51",
    padding:10,
    marginLeft:"3%",
    marginRight:"3%",
   
},
buttonSquarelabel:{
    color:"white",
    fontSize:20,
    textAlign:"center",
    marginTop:"-2%"
},
buttonSortView:{
    width:"45%",
    borderRadius:10,
    height:40,
    backgroundColor:"white",
    padding:10,
    marginLeft:"3%",
    marginRight:"3%",
},
buttonSortlabel:{
    color:"black",
    fontSize:15,
    textAlign:"center",
    marginTop:"-15%",
    marginLeft:"13%"
},
Image:{
 width:18,
 height:18,
 marginLeft:"5%"
},
ImageView:{

},
skipView:{
    width:"16%",
    borderRadius:20,
    height:28,
    backgroundColor:"#000000",
    padding:10,
    marginLeft:"3%",
    marginRight:"3%",
},
skiplabel:{
    fontSize:13,
    color:"#E5E5E5",
    marginTop:"-20%",
    textAlign:"center"

}

})