'use client'
import React, {  useState } from 'react'
import { TbMapSearch } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";
import { GrLinkPrevious,  GrLinkNext } from "react-icons/gr";
import {motion} from "framer-motion"
import { PiLineVerticalLight } from "react-icons/pi";

export default function Visuals() {
  const[color1, setColor1] = useState('#fff');
  const[color2, setColor2] = useState('');
  const[color3, setColor3] = useState('');
  const[color11, setColor11] = useState('#c70f06');
  const[color22, setColor22] = useState('#b9b9b9');
  const[color33, setColor33] = useState('#b9b9b9');
  const [anim1, setAnim1]= useState('pulse');
  const [anim2, setAnim2]= useState('none');
  const [anim3, setAnim3]= useState('none');
  const[color4, setColor4] = useState('');
  const[color5, setColor5] = useState('');
  const[page1, setPage1] = useState('');
  const[page2, setPage2] = useState('none');
  const[page3, setPage3] = useState('none');
  const[page4, setPage4] = useState('none');
  const[page5, setPage5] = useState('none');
  const[page6, setPage6] = useState('none');


      function page1route() {
        setColor1('#fff')
        setColor11('#c70f06')
        setColor2('#000')
        setColor22('#b9b9b9')
        setColor3('#000')
        setColor33('#b9b9b9')
       setAnim1('pulse');
       setAnim2('none')
      setAnim3('none')
        setPage1('');
        setPage2('none')
        setPage3('none')
        setPage4('none')
        setPage5('none')
        setPage6('none')
      }
      function page2route() {
        setColor1('#000')
        setColor11('#b9b9b9')
        setColor2('#fff')
        setColor22('#c70f06')
        setColor3('#000')
        setColor33('#b9b9b9')
        setAnim1('none');
        setAnim2('pulse')
       setAnim3('none')
        setPage1('none');
        setPage2('')
        setPage3('none')
        setPage4('none')
        setPage5('none')
        setPage6('none')
      }
      function page3route() {
        setColor1('#000')
        setColor11('#b9b9b9')
        setColor2('#000')
        setColor22('#b9b9b9')
        setColor3('#fff')
        setColor33('#c70f06')
        setAnim1('none');
        setAnim2('none')
       setAnim3('pulse')
        setPage1('none');
        setPage2('none')
        setPage3('')
        setPage4('none')
        setPage5('none')
        setPage6('none')
      }
      function page4route() {
        setColor1('black')
        setColor2('black')
        setColor3('black')
        setColor4('[#c70f06]')
        setColor5('black')
        setPage1('none');
        setPage2('none')
        setPage3('none')
        setPage4('')
        setPage5('none')
        setPage6('none')
      }
      function page5route() {
        setColor1('black')
        setColor2('black')
        setColor3('black')
        setColor4('black')
        setColor5('[#c70f06]')
        setPage1('none');
        setPage2('none')
        setPage3('none')
        setPage4('none')
        setPage5('')
        setPage6('none')
      }
      function page6route() {
        setColor1('black')
        setColor2('black')
        setColor3('black')
        setColor4('black')
        setColor5('black')
        setPage1('none');
        setPage2('none')
        setPage3('none')
        setPage4('none')
        setPage5('none')
        setPage6('')
      }

  return (
    <div className='pb-[0px] overflow-hidden flex' >
      <div className='text-[#414141] text-[16px]  font-semibold bg-[#fafafa] pt-[10%] shadow-xl justify-center items-center  pb-[150px] w-[400px] space-y-[1px]'>
        <div className='w-full'>
          <p className={`font-semibold text-[18px] text-center animate-${anim1} bg-[${color11}] py-3 text-[${color1}]`}>Form 1</p>
        </div>
        <div className='items-center  justify-center mx-auto flex'>
          <PiLineVerticalLight className='w-1 rounded-[15px] h-[70px] bg-[#6d6d6d] '/>
        </div>
        <div className='w-full'>
          <p className={`font-semibold text-[18px]   text-center border-l-${color2} animate-${anim2} py-3 text-[${color2}] bg-[${color22}]`}>Form 2</p>
        </div>
        <div className='items-center  justify-center mx-auto flex'>
          <PiLineVerticalLight className='w-1 rounded-[15px] h-[70px] bg-[#6d6d6d] '/>
        </div>
        <div className='w-full'>
          <p className={`font-semibold text-[18px]   text-center border-l-${color3} animate-${anim3} py-3 text-[${color3}] bg-[${color33}]`}>Form 3</p>
        </div>
        {/* <div className='w-full'>
          <p className={`font-semibold text-[18px] border-l-${color4}  text-${color4}`}>04. Vos crédits en cours</p>
        </div>
        <div className='w-full'>
          <p className={`font-semibold text-[18px] border-l-${color5}  text-${color5}`}>05. Votre apport</p>
        </div> */}
      </div>

      <div className='bg-[#fffdfd] w-full  shadow-xl'>
        <div className='mt-[0px] pb-[20px] flex mx-auto items-center justify-center text-[#000]' style={{display:page1}}>
       <div className='w-fit px-[50px] pb-[20px] shadow-xl rounded-[10px]'>
       <div>
            <div className='flex mx-auto items-center justify-center gap-x-[60px] pt-[20px]'>
                <p className='text-[18px] w-[300px]'>Quel est votre statut en RDC ?  </p>
                <select id="dropdownTextbox" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '>      
                  {/* <option value="" selected disabled>Resident / Non-resident</option> */}
                  <option value="Genre" selected disabled hidden>Resident / Non-resident</option>
                  <option  value="Resident">Resident</option>
                  <option  value="Non-resident">Non-resident</option>
                  </select>
            </div>
        </div>
        <div>
            <div className='flex mx-auto items-center justify-center gap-x-[60px] pt-[10px]'>
                <p className='text-[18px] w-[300px]'>Type de Compte </p>
                <select id="dropdownTextbox"  className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '>      
                  <option value="Individuel / Joint" selected disabled hidden>Individuel / Joint</option>
                  <option  value="Individuel">Individuel</option>
                  <option  value="Joint">Joint</option>
                </select>
            </div>
        </div>
        <div>
            <div className='flex mx-auto items-center justify-center gap-x-[60px] pt-[10px]'>
                <p className='text-[18px] w-[300px]'>Catégorie</p>
                <select id="dropdownTextbox"  className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '>      
                  <option value="Compte Courant / Compte Epargne / Compte Salaire" selected disabled hidden>Compte Courant / Compte Epargne / Compte Salaire</option>
                  <option  value="Compte Courant">Compte Courant</option>
                  <option  value="Compte Epargne">Compte Epargnet</option>
                  <option  value="Compte Salaire">Compte Salaire</option>
                </select>
            </div>
        </div>
        <div>
            <div className='flex mx-auto items-center justify-center gap-x-[60px] pt-[10px]'>
                <p className='text-[18px] w-[300px]'>Type de Compte </p>
                <select id="dropdownTextbox"  className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '>      
                  <option value="" selected disabled hidden>CDF / USD / EURO /LIVRE</option>
                  <option  value="CDF">CDF</option>
                  <option  value="USD">USD</option>
                  <option  value="EURO">EURO</option>
                  <option  value="LIVRE">LIVRE</option>
                </select>
            </div>
        </div>
        <p className='text-[#c70f06] font-semibold text-center pt-6 pb-3 text-[25px]'>INFORMATIONS PERSONNELLES DU TITULAIRE DE COMPTE</p>
       <div className='flex mx-auto items-center justify-center'>
       <div className='space-y-3'>
          <div className='flex gap-x-10'>
            <input type="text" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] ' placeholder='Name' />
            <input type="text" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] ' placeholder='Post-Nom' />
          </div>
          <div className='flex gap-x-10'>
            <input type="text" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] ' placeholder='Prénom' />
            <select id="dropdownTextbox"  className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '>      
                  <option value="Compte Courant / Compte Epargne / Compte Salaire" selected disabled hidden>Sexe</option>
                  <option  value="OUI">Male</option>
                  <option  value="NON">Female</option>
                </select>
          </div>
          <div className='flex gap-x-10'>
            <input type="text" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] ' placeholder='Lieu de Naissance' />
            <input type="date" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] ' placeholder='Date de Naissance' />
          </div>
          <div className='flex gap-x-10'>
            <input type="text" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] ' placeholder='Nationalité ' />
            <select id="dropdownTextbox"  className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '>      
                  <option value="Pays de Résidence" selected disabled hidden>Pays de Résidence</option>
                  <option value="AF">Afghanistan</option>
        <option value="AL">Albania</option>
        <option value="DZ">Algeria</option>
        <option value="AS">American Samoa</option>
        <option value="AD">Andorra</option>
        <option value="AO">Angola</option>
        <option value="AI">Anguilla</option>
        <option value="AQ">Antarctica</option>
        <option value="AG">Antigua and Barbuda</option>
        <option value="AR">Argentina</option>
        <option value="AM">Armenia</option>
        <option value="AW">Aruba</option>
        <option value="AU">Australia</option>
        <option value="AT">Austria</option>
        <option value="AZ">Azerbaijan</option>
        <option value="BS">Bahamas</option>
        <option value="BH">Bahrain</option>
        <option value="BD">Bangladesh</option>
        <option value="BB">Barbados</option>
        <option value="BY">Belarus</option>
        <option value="BE">Belgium</option>
        <option value="BZ">Belize</option>
        <option value="BJ">Benin</option>
        <option value="BM">Bermuda</option>
        <option value="BT">Bhutan</option>
        <option value="BO">Bolivia</option>
        <option value="BA">Bosnia and Herzegovina</option>
        <option value="BW">Botswana</option>
        <option value="BV">Bouvet Island</option>
        <option value="BR">Brazil</option>
        <option value="IO">British Indian Ocean Territory</option>
        <option value="BN">Brunei Darussalam</option>
        <option value="BG">Bulgaria</option>
        <option value="BF">Burkina Faso</option>
        <option value="BI">Burundi</option>
        <option value="KH">Cambodia</option>
        <option value="CM">Cameroon</option>
        <option value="CA">Canada</option>
        <option value="CV">Cape Verde</option>
        <option value="KY">Cayman Islands</option>
        <option value="CF">Central African Republic</option>
        <option value="TD">Chad</option>
        <option value="CL">Chile</option>
        <option value="CN">China</option>
        <option value="CX">Christmas Island</option>
        <option value="CC">Cocos (Keeling) Islands</option>
        <option value="CO">Colombia</option>
        <option value="KM">Comoros</option>
        <option value="CG">Congo</option>
        <option value="CD">Congo, the Democratic Republic of the</option>
        <option value="CK">Cook Islands</option>
        <option value="CR">Costa Rica</option>
        <option value="CI">Côte d'Ivoire</option>
        <option value="HR">Croatia</option>
        <option value="CU">Cuba</option>
        <option value="CY">Cyprus</option>
        <option value="CZ">Czech Republic</option>
        <option value="DK">Denmark</option>
        <option value="DJ">Djibouti</option>
        <option value="DM">Dominica</option>
        <option value="DO">Dominican Republic</option>
        <option value="EC">Ecuador</option>
        <option value="EG">Egypt</option>
        <option value="SV">El Salvador</option>
        <option value="GQ">Equatorial Guinea</option>
        <option value="ER">Eritrea</option>
        <option value="EE">Estonia</option>
        <option value="ET">Ethiopia</option>
        <option value="FK">Falkland Islands (Malvinas)</option>
        <option value="FO">Faroe Islands</option>
        <option value="FJ">Fiji</option>
        <option value="FI">Finland</option>
        <option value="FR">France</option>
        <option value="GF">French Guiana</option>
        <option value="PF">French Polynesia</option>
        <option value="TF">French Southern Territories</option>
        <option value="GA">Gabon</option>
        <option value="GM">Gambia</option>
        <option value="GE">Georgia</option>
        <option value="DE">Germany</option>
        <option value="GH">Ghana</option>
        <option value="GI">Gibraltar</option>
        <option value="GR">Greece</option>
        <option value="GL">Greenland</option>
        <option value="GD">Grenada</option>
        <option value="GP">Guadeloupe</option>
        <option value="GU">Guam</option>
        <option value="GT">Guatemala</option>
        <option value="GN">Guinea</option>
        <option value="GW">Guinea-Bissau</option>
        <option value="GY">Guyana</option>
        <option value="HT">Haiti</option>
        <option value="HM">Heard Island and McDonald Islands</option>
        <option value="VA">Holy See (Vatican City State)</option>
        <option value="HN">Honduras</option>
        <option value="HK">Hong Kong</option>
        <option value="HU">Hungary</option>
        <option value="IS">Iceland</option>
        <option value="IN">India</option>
        <option value="ID">Indonesia</option>
        <option value="IR">Iran, Islamic Republic of</option>
        <option value="IQ">Iraq</option>
        <option value="IE">Ireland</option>
        <option value="IL">Israel</option>
        <option value="IT">Italy</option>
        <option value="JM">Jamaica</option>
        <option value="JP">Japan</option>
        <option value="JO">Jordan</option>
        <option value="KZ">Kazakhstan</option>
        <option value="KE">Kenya</option>
        <option value="KI">Kiribati</option>
        <option value="KP">Korea, Democratic People's Republic of</option>
        <option value="KR">Korea, Republic of</option>
        <option value="KW">Kuwait</option>
        <option value="KG">Kyrgyzstan</option>
        <option value="LA">Lao People's Democratic Republic</option>
        <option value="LV">Latvia</option>
        <option value="LB">Lebanon</option>
        <option value="LS">Lesotho</option>
        <option value="LR">Liberia</option>
        <option value="LY">Libya</option>
        <option value="LI">Liechtenstein</option>
        <option value="LT">Lithuania</option>
        <option value="LU">Luxembourg</option>
        <option value="MO">Macao</option>
        <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
        <option value="MG">Madagascar</option>
        <option value="MW">Malawi</option>
        <option value="MY">Malaysia</option>
        <option value="MV">Maldives</option>
        <option value="ML">Mali</option>
        <option value="MT">Malta</option>
        <option value="MH">Marshall Islands</option>
        <option value="MQ">Martinique</option>
        <option value="MR">Mauritania</option>
        <option value="MU">Mauritius</option>
        <option value="YT">Mayotte</option>
        <option value="MX">Mexico</option>
        <option value="FM">Micronesia, Federated States of</option>
        <option value="MD">Moldova, Republic of</option>
        <option value="MC">Monaco</option>
        <option value="MN">Mongolia</option>
        <option value="ME">Montenegro</option>
        <option value="MS">Montserrat</option>
        <option value="MA">Morocco</option>
        <option value="MZ">Mozambique</option>
        <option value="MM">Myanmar</option>
        <option value="NA">Namibia</option>
        <option value="NR">Nauru</option>
        <option value="NP">Nepal</option>
        <option value="NL">Netherlands</option>
        <option value="NC">New Caledonia</option>
        <option value="NZ">New Zealand</option>
        <option value="NI">Nicaragua</option>
        <option value="NE">Niger</option>
        <option value="NG">Nigeria</option>
        <option value="NU">Niue</option>
        <option value="NF">Norfolk Island</option>
        <option value="MP">Northern Mariana Islands</option>
        <option value="NO">Norway</option>
        <option value="OM">Oman</option>
        <option value="PK">Pakistan</option>
        <option value="PW">Palau</option>
        <option value="PS">Palestine, State of</option>
        <option value="PA">Panama</option>
        <option value="PG">Papua New Guinea</option>
        <option value="PY">Paraguay</option>
        <option value="PE">Peru</option>
        <option value="PH">Philippines</option>
        <option value="PN">Pitcairn</option>
        <option value="PL">Poland</option>
        <option value="PT">Portugal</option>
        <option value="PR">Puerto Rico</option>
        <option value="QA">Qatar</option>
        <option value="RE">Réunion</option>
        <option value="RO">Romania</option>
        <option value="RU">Russian Federation</option>
        <option value="RW">Rwanda</option>
        <option value="BL">Saint Barthélemy</option>
        <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
        <option value="KN">Saint Kitts and Nevis</option>
        <option value="LC">Saint Lucia</option>
        <option value="MF">Saint Martin (French part)</option>
        <option value="PM">Saint Pierre and Miquelon</option>
        <option value="VC">Saint Vincent and the Grenadines</option>
        <option value="WS">Samoa</option>
        <option value="SM">San Marino</option>
        <option value="ST">Sao Tome and Principe</option>
        <option value="SA">Saudi Arabia</option>
        <option value="SN">Senegal</option>
        <option value="RS">Serbia</option>
        <option value="SC">Seychelles</option>
        <option value="SL">Sierra Leone</option>
        <option value="SG">Singapore</option>
        <option value="SX">Sint Maarten (Dutch part)</option>
        <option value="SK">Slovakia</option>
        <option value="SI">Slovenia</option>
        <option value="SB">Solomon Islands</option>
        <option value="SO">Somalia</option>
        <option value="ZA">South Africa</option>
        <option value="GS">South Georgia and the South Sandwich Islands</option>
        <option value="SS">South Sudan</option>
        <option value="ES">Spain</option>
        <option value="LK">Sri Lanka</option>
        <option value="SD">Sudan</option>
        <option value="SR">Suriname</option>
        <option value="SJ">Svalbard and Jan Mayen</option>
        <option value="SZ">Swaziland</option>
        <option value="SE">Sweden</option>
        <option value="CH">Switzerland</option>
        <option value="SY">Syrian Arab Republic</option>
        <option value="TW">Taiwan, Province of China</option>
        <option value="TJ">Tajikistan</option>
        <option value="TZ">Tanzania, United Republic of</option>
        <option value="TH">Thailand</option>
        <option value="TL">Timor-Leste</option>
        <option value="TG">Togo</option>
        <option value="TK">Tokelau</option>
        <option value="TO">Tonga</option>
        <option value="TT">Trinidad and Tobago</option>
        <option value="TN">Tunisia</option>
        <option value="TR">Turkey</option>
        <option value="TM">Turkmenistan</option>
        <option value="TC">Turks and Caicos Islands</option>
        <option value="TV">Tuvalu</option>
        <option value="UG">Uganda</option>
        <option value="UA">Ukraine</option>
        <option value="AE">United Arab Emirates</option>
        <option value="GB">United Kingdom</option>
        <option value="US">United States</option>
        <option value="UM">United States Minor Outlying Islands</option>
        <option value="UY">Uruguay</option>
        <option value="UZ">Uzbekistan</option>
        <option value="VU">Vanuatu</option>
        <option value="VE">Venezuela, Bolivarian Republic of</option>
        <option value="VN">Viet Nam</option>
        <option value="VG">Virgin Islands, British</option>
        <option value="VI">Virgin Islands, U.S.</option>
        <option value="WF">Wallis and Futuna</option>
        <option value="EH">Western Sahara</option>
        <option value="YE">Yemen</option>
        <option value="ZM">Zambia</option>
        <option value="ZW">Zimbabwe</option>
                </select>
          </div>
          <div className='flex gap-x-10'>
            <select id="dropdownTextbox"  className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '>      
                  <option value="Compte Courant / Compte Epargne / Compte Salaire" selected disabled hidden>Situation Matrimoniale</option>
                  <option  value="célibataire">célibataire</option>
                  <option  value="marié(e)">marié(e)</option>
                  <option  value="veuve">veuve</option>
                  <option  value="divorcé(e)">divorcé(e)</option>

                </select>
            <select id="dropdownTextbox"  className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '>      
                  <option value="Compte Courant / Compte Epargne / Compte Salaire" selected disabled hidden>Indice d’américanité</option>
                  <option  value="OUI">OUI</option>
                  <option  value="NON">NON</option>
                </select>
          </div>
        
        </div>
       </div>

       <p className='text-[#c70f06] font-semibold text-center pt-6 pb-3 text-[25px]'>ADDRESSE PHYSIQUE / CONTACTS</p>
       <div className='flex mx-auto items-center justify-center'>
        <div className='space-y-3'>
        <div className='flex gap-x-10'>
            <input type="text" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] ' placeholder='Avenue	' />
            <input type="text" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] ' placeholder='Numéro' />
          </div>
          <div className='flex gap-x-10'>
            <input type="text" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] ' placeholder='Quartier' />
            <input type="text" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] ' placeholder='Commune' />
          </div>
          <div className='flex gap-x-10'>
            <input type="text" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] ' placeholder='Ville' />
            <input type="text" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] ' placeholder='Pays' />
          </div>
          <div className='flex gap-x-10'>
            <input type="number" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] ' placeholder='Téléphone	' />
            <input type="email" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] ' placeholder='Email' />
          </div>
        </div>
      
       </div>
       <div className='mx-auto items-center flex justify-end mt-5'>
          <button className='bg-[#c70f06] text-white font-semibold text-[18px] py-2 px-6 pr-5 rounded-[10px] ' onClick={page2route}>Suivant</button>
        </div>
       </div>
   
        </div>

        <motion.div initial={{y: +200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}}
        className='' style={{display:page2}}>
         
         <div className='bg-[#fffdfd] w-full pb-[50px] shadow-xl'>
        <div className='mt-[20px] pb-[20px] flex mx-auto items-center justify-center text-[#000]' style={{display:page2}}>
       <div className='w-fit px-[50px] pb-[20px] shadow-xl rounded-[10px] space-y-4'>
            

            <div className='flex gap-x-10 mt-10'>
              <input type="text" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] ' placeholder='Employeur'/>
              <input type="text" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] ' placeholder='Fonction'/>
            </div>
            <div>
              <textarea name="" id="" className='w-full px-10 mt-0  pl-4 py-2 text-black font-semibold h-[200px] border-[#000] hover:border-[#000] rounded-[5px] border-[1px] ' placeholder="Address de l'employeur"></textarea>
            </div>
            <div className='flex gap-x-10 mt-5'>
              <input type="text" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] ' placeholder='Tel du Bureau '/>
              <input type="text" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] ' placeholder='Email du bureau'/>
            </div>
            <div className='flex gap-x-10 mt-5'>
              <input type="text" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] ' placeholder='Revenu annuel'/>              
              <select id="dropdownTextbox"  className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '>      
                  <option value="Individuel / Joint" selected disabled hidden> 9 999 $ / 10 000 $ - 49 999$ / 50 0000 – 100 000 $/  + 100 000$</option>
                  <option  value="9 999$">9 999$</option>
                  <option  value="10 000 $ - 49 999$">10 000 $ - 49 999$</option>
                  <option  value="50 0000 – 100 000 $">50 0000 – 100 000 $</option>
                  <option  value="+ 100 000$">+ 100 000$</option>
                </select>
            </div>
            <p className='text-[#c70f06] font-semibold text-center pt-9 pb-3 text-[25px]'>SOUSCRIPTION AUX PRODUITS ET SERVICES</p>
            <div className='flex gap-x-10 mt-5'>
              <button className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-[#c70f06] font-semibold border-[#c70f06] hover:border-[#c70f06] rounded-[5px] border-[1px] hover:text-white hover:bg-[#c70f06]'> DAB Carte de Debit</button>
              <button className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-[#c70f06] font-semibold border-[#c70f06] hover:border-[#c70f06] rounded-[5px] border-[1px] hover:text-white hover:bg-[#c70f06]'> SMS Alert</button>
            </div>
            <div className='flex gap-x-10 mt-5'>
              <button className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-[#c70f06] font-semibold border-[#c70f06] hover:border-[#c70f06] rounded-[5px] border-[1px] hover:text-white hover:bg-[#c70f06]'> Mobile Banking</button>
              <button className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-[#c70f06] font-semibold border-[#c70f06] hover:border-[#c70f06] rounded-[5px] border-[1px] hover:text-white hover:bg-[#c70f06]'> Visa / Mastercard</button>
            </div>
            <div className='flex gap-x-10 mt-5'>
              <button className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-[#c70f06] font-semibold border-[#c70f06] hover:border-[#c70f06] rounded-[5px] border-[1px] hover:text-white hover:bg-[#c70f06]'>Email Alert</button>
              <button className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-[#c70f06] font-semibold border-[#c70f06] hover:border-[#c70f06] rounded-[5px] border-[1px] hover:text-white hover:bg-[#c70f06]'> Internet Banking</button>
            </div>
            <div className=' mt-9'>
                <p>Comment voulez-vous recevoir vos relevés</p>
                <select id="dropdownTextbox"  className='w-full px-10 mt-0 md:w-full  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '>      
                  <option value="Individuel / Joint" selected disabled hidden> Email / Poste/ Banque /Autre moyen </option>
                  <option  value="Email">Email</option>
                  <option  value="Poste">Poste</option>
                  <option  value="Banque">Banque</option>
                  <option  value="Autre moyen">Autre moyen</option>
                  
                </select> </div>
            <div className='mx-auto items-center flex justify-end mt-5 gap-x-4'>
            <button className='bg-[#c70f06] text-white font-semibold text-[18px] py-2 px-6 pr-5 rounded-[10px] ' onClick={page1route}>Precedent</button>
              <button className='bg-[#c70f06] text-white font-semibold text-[18px] py-2 px-6 pr-5 rounded-[10px] ' onClick={page3route}>Suivant</button>
            </div>
          </div>
          </div>
         </div>


          </motion.div>


          <motion.div initial={{y: +200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className=' h-screen flex items-center justify-center mx-auto -mt-[200px]' style={{display:page3}} >
          <div>
          <p className='  text-[50px] text-black font-bold'>Form 3</p>
        <div className='flex items-center justify-start mx-auto '>
        <p className=' text-[30px] text-black'>Coming soon...</p>
        </div>
          
          </div>
          
          </motion.div>


          {/* <motion.div initial={{x: +200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='mt-[40px]   pl-[28%]' style={{display:page4}}>
          <div className='w-[500px]'>
          <p className='  text-[50px] text-black font-bold'>Vos crédits en cours</p>
          <p className='  text-black'>Indiquez uniquement les crédits que vous continuerez à rembourser en même temps que votre nouveau crédit immobilier. Si vous empruntez à deux, faites la somme de vos mensualités de crédits respectifs.</p>
          </div>
          <div className='mt-10'>
          <div>
                <p className='text-[17px] text-black '>Vos mensualités de crédits </p>
                <div className='flex gap-x-[1px]'>
                <input  maxLength={10} required placeholder='0'
               className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '/>      
                  <p className='text-black py-3 font-extrabold'>USD</p>
                  </div>      
                </div>
          
                <div className='mt-[90px] flex gap-x-[4%]' >
                  <p className='mt-[150px] text-[50px] text-[#e5e5e5] font-bold'>Votre apport</p>
            <div className='flex mt-[160px] gap-x-[4%] '>
                  <div onClick={page3route} className='bg-[#c70f06] flex rounded-[20px] w-[150px] h-[50px] hover:cursor-pointer hover:bg-[#d73611] shadow-xl'>                
                  <div className='px-7 py-3 flex gap-x-3 '>
                  <GrLinkPrevious className='mt-[4px] text-[19px] font-semibold'/>
                    <p className='font-semibold '>Previous</p>
                  </div>
                  </div>
                  <div onClick={page5route} className='bg-[#c70f06] flex rounded-[20px] w-[150px] h-[50px] hover:cursor-pointer hover:bg-[#d73611] shadow-xl'>                
                  <div className='px-7 py-3 flex gap-x-3 '>
  
                    <p className='font-semibold '>Next</p>
                    <GrLinkNext className='mt-[4px] text-[19px] font-semibold'/>
                  </div>
                  </div>
                </div>
                </div>
          </div>
          </motion.div>

          <motion.div initial={{x: +200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='mt-[40px]   pl-[28%]' style={{display:page5}}>
          <div className='w-[600px]'>
          <p className='  text-[50px] text-black font-bold'>Votre apport</p>
          <p className='  text-black'>L’apport personnel peut être composé de vos économies, d’un placement, de la vente d’un bien ou encore d’une donation.</p>
          </div>
          <div className='mt-10'>
          <div>
                <p className='text-[17px] text-black '>Vous avez un apport de </p>
                <div className='flex gap-x-[1px]'>
                <input  maxLength={10} required placeholder='0'
               className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-2 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '/>      
                  <p className='text-black py-3 font-extrabold'>USD</p>
                  </div>      
                </div>
          
                <div className='mt-[90px] flex gap-x-[4%]' >
                  <p className='mt-[150px] text-[50px] text-[#e5e5e5] font-bold'>Votre apport</p>
            <div className='flex mt-[160px] gap-x-[4%] '>
                  <div onClick={page4route} className='bg-[#c70f06] flex rounded-[20px] w-[150px] h-[50px] hover:cursor-pointer hover:bg-[#d73611] shadow-xl'>                
                  <div className='px-7 py-3 flex gap-x-3 '>
                  <GrLinkPrevious className='mt-[4px] text-[19px] font-semibold'/>
                    <p className='font-semibold '>Previous</p>
                  </div>
                  </div>
                  <div  className='bg-[#c70f06] flex rounded-[20px] w-[150px] h-[50px] hover:cursor-pointer hover:bg-[#d73611] shadow-xl'>                
                  <a href="/">
                  <div className='px-7 py-3 flex gap-x-3 '>
  
                    <p className='font-semibold '>Finish</p>
                    <GrLinkNext className='mt-[4px] text-[19px] font-semibold'/>
                  </div>
                  </a>
                  </div>
                </div>
                </div>
          </div>
          </motion.div> */}
      </div>
    </div>
  )
}
