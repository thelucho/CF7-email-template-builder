// Variables
const formulario = document.getElementById('formulario');
const preview = document.getElementById('preview');
const code = document.getElementById('code-box');



// Event Listeners
formulario.addEventListener('submit', generarTemplate);



// Funciones
function generarTemplate(e) {
    e.preventDefault();

    const infoTemplate = {
        logoHeaderLink: formulario.querySelector('#logo-url-header').value,
        logoHeaderImg: formulario.querySelector('#logo-img-header').value,

        asunto: formulario.querySelector('#asunto').value,

        campo_nombre_1: formulario.querySelector('#campo1-nombre').value,
        campo_shortcode_1: formulario.querySelector('#campo1-shortcode').value,
        campo_nombre_2: formulario.querySelector('#campo2-nombre').value,
        campo_shortcode_2: formulario.querySelector('#campo2-shortcode').value,
        campo_nombre_3: formulario.querySelector('#campo3-nombre').value,
        campo_shortcode_3: formulario.querySelector('#campo3-shortcode').value,
        campo_nombre_4: formulario.querySelector('#campo4-nombre').value,
        campo_shortcode_4: formulario.querySelector('#campo4-shortcode').value,
        campo_nombre_5: formulario.querySelector('#campo5-nombre').value,
        campo_shortcode_5: formulario.querySelector('#campo5-shortcode').value,

        logoFooterLink: formulario.querySelector('#logo-url-footer').value,
        logoFooterImg: formulario.querySelector('#logo-img-footer').value
    }

    imprimirCodigo(infoTemplate);
}


function imprimirCodigo(template) {

    const div = document.createElement('div');

    div.innerHTML =
        `
            <table bgcolor="#f0f0f0" width="100%" border="0" cellspacing="0" cellpadding="0" align="center"
                style="padding-top: 70px; padding-bottom: 70px;">
                <tbody>
                  <tr>
                    <td>
                      <table align="center" bgcolor="#fff" border="0" width="600" style="background-color: #fff;">
                        <tbody>
                          <tr>
                            <td align="center" valign="bottom" style="padding-top: 10px;">
                              <a href="${template.logoHeaderLink}" style="border:none;" target="_blank">
                              <img src="${template.logoHeaderImg}"
                                  alt="Strive Training Logo" style="border:none; width: 40%; margin-top: 25px;"></a>
                            </td>
                          </tr>
                          <tr>
                            <table align="center" bgcolor="#fff" border="0" cellpadding="40" width="600" cellspacing="0">
                              <tbody>
                                <tr>
                                  <td width="600" valign="top"
                                    style="font-family:Arial; font-size:14px; color:#7c7c7c; line-height:20px;">
                                    <p style="margin: 0; padding: 0;"><span
                                        style="font-family:Arial; font-size:15px; color:#325c83;font-weight:bold;">${template.asunto}</span></p>
                                    <br>
                                    <p style="margin: 0; padding: 0;"><span
                                        style="font-family:Arial; font-size:15px; color:#777777;font-weight:bold;">${template.campo_nombre_1} </span>${template.campo_shortcode_1}</p>
                                    <p style="margin: 0; padding: 0;"><span
                                        style="font-family:Arial; font-size:15px; color:#777777;font-weight:bold;">${template.campo_nombre_2} </span>${template.campo_shortcode_2}</p>
                                    <p style="margin: 0; padding: 0;"><span
                                        style="font-family:Arial; font-size:15px; color:#777777;font-weight:bold;">${template.campo_nombre_3} </span>${template.campo_shortcode_3}</p>
                                    <p style="margin: 0; padding: 0;"><span
                                        style="font-family:Arial; font-size:15px; color:#777777;font-weight:bold;">${template.campo_nombre_4} </span>${template.campo_shortcode_4}</p>
                                    <p style="margin: 0; padding: 0;"><span
                                        style="font-family:Arial; font-size:15px; color:#777777;font-weight:bold;">${template.campo_nombre_5} </span>${template.campo_shortcode_5}</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td width="600" valign="center"
                                    style="font-family:Arial; font-size:14px; text-align: center; color:#ffffff; padding: 35px 0px; background-color:#98498D; ">
                                    <p><b><a href="${template.logoFooterLink}" target="_blank"
                                          style="color:#ffffff;"><img src="${template.logoFooterImg}" /></a></b></p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </tr>

                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
            </table>
    `;


    // Inserta el div con el template armado en '#preview'
    preview.appendChild(div);

    // Inserta el codigo en el div '#code'
    code.innerHTML = div.innerHTML;

}


