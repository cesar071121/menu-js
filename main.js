document.querySelector("#button1").onclick=()=>{
    Swal.fire({
        title: "no tienes internet? JAJAJAJJA Revisa tu pago we",
        text: "Revisa bien tu Conexion a Internet pobreton?",
        icon: "question"
      });
}

document.querySelector("#button2").onclick=()=>{
    Swal.fire({
        icon: "error",
        title: "Error...estas bien wey",
        text: "A ocurrido un Error echale coco!",
        footer: '<a href="#">ya le checaste bien tus datos?</a>'
      });
}
document.querySelector("#button3").onclick=()=>{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-chi",
          cancelButton: "btn btn-o ño"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Estas Seguro de Salir Sin Guardar Tus Datos?",
        text: "Los cambios que se han hecho se perderan al Salir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, ya me voy!",
        cancelButtonText: "NO, sacame wey!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "adios negro!",
            text: "Tu Progreso, No se Guardaron tus cochinadas .",
            icon: "ta bien :)"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelar",
            text: "Tus Archivos Han sido Guardados Exitosamente :)",
            icon: "error"
          });
        }
      });
}
document.querySelector("#button4").onclick=()=>{
    Swal.fire({
        title: "Exito!",
        text: "Tu Progreso ha sido Guardado Exitosamente.",
        imageUrl: "spi.jpeg",
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: "Custom image"
      });
}
document.querySelector("#button5").onclick=()=>{
    Swal.fire({
        title: "Submit your Github username",
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        preConfirm: async (login) => {
          try {
            const githubUrl = `
              https://api.github.com/users/${login}
            `;
            const response = await fetch(githubUrl);
            if (!response.ok) {
              return Swal.showValidationMessage(`
                ${JSON.stringify(await response.json())}
              `);
            }
            return response.json();
          } catch (error) {
            Swal.showValidationMessage(`
              Request failed: ${error}
            `);
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          });
        }
      });
}
document.querySelector("#button6").onclick=()=>{
    Swal.fire({
        title: "Deseas Guardar los Cambios?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `No Guardar`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}

