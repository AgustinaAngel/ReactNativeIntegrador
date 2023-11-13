const appStyles = {
    container: {
      flex: 1,
      backgroundColor: "#fff",
      margin: 10,
      alignItems: "center",
    },
    inputLabel: {
      textAlign: "left",
    },
    botonMenu1: {
     
      color: "red",
      fontSize: 18,
      fontWeight: 'bold',
      flex: 1,
      justifyContent:"center",
      textAlignVertical: "center",
      alignItems: "center",
    },
    botonMenu3: {
     
      color: "blue",
      fontSize: 18,
      fontWeight: 'bold',
      flex: 10,
      justifyContent:"center",
      textAlignVertical: "center",
      alignItems: "center",
    },
    botonMenu2: {
      
      color: "green",
      fontSize: 18,
      fontWeight: 'bold',
      flex: 15,
      justifyContent:"center",
      textAlignVertical: "center",
      alignItems: "center",
    },
    buttonText1: {
      color: "white",
      fontSize: 15,
      paddingVertical: 5,
      paddingHorizontal: 24,
      borderRadius: 5,
      textAlign: "center",
      alignItems: "center",
    },
    menuContainer:{
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      height: 50, 
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "#D6D6D6",
    },
    textoScreen:{
      color: "white",
      fontSize: 50,
      fontWeight: 'bold',  
    },
    input: {
      height: 40,
      borderWidth: 1,
      padding: 1,
      width: 200,
    },
    posBotton: {
      flexDirection: "row",
      textAlign: "center",
      textAlignVertical: "auto",
      flex: 1,
    },
    imagenLogo: {
      height: 60,
      width: 210,
      padding: 10,
      margin: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    backgroundScreen1: {
      backgroundColor: "red",
    },
    backgroundScreen2: {
      backgroundColor: "green",
    },
    backgroundScreen3: {
      backgroundColor: "blue",
    },
  
    buttonContainer: {
      // Estilo predeterminado
      width: "100%",
      backgroundColor: "#007AFF",
      borderRadius: 5,
      paddingVertical: 12,
      marginTop: 15,
      marginBottom: 15,
      height: 60,
      width: 200,
    },
  
    //contenedor
    logoutButton: {
      backgroundColor: "gray",
    },
  
    logInButton: {
      backgroundColor: "#f29100ff",
    },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
      },
      buttonGeneral: {
        marginTop: 20,
        width: 110,
        height: 60,
        backgroundColor: 'grey',
        color: 'white',
        borderRadius: 10,
        justifyContent: 'space-around'
      },
      image: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      cameraContainer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        padding: 20,
        justifyContent: 'space-between'
      }, 
      modalViewSuccess: {
        margin: 20,
        backgroundColor: 'green',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalViewError: {
        margin: 20,
        backgroundColor: 'red',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: 'black',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        color: 'white',
        marginBottom: 15,
        textAlign: 'center',
    },
    menu: {
      display: "flex",
      backgroundColor: "white",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: 100,
      position: "absolute",
      bottom: 0,
    },
    text: {
      textAlign: "center",
      color: 'black',
    },
  };
  
  export default appStyles;