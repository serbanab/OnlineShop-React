import React from "react";
import "./Terms_and_conditions.css"
import Layout from "../../components/Layout/Layout";

function Terms_and_conditions({history}){

    console.log(history.location.pathname);

    return (
        <>
            <Layout history = {history}>
            <div className = "terms_conditions"  data-bs-spy="scroll"  data-bs-target="#scroll"  ></div>
                <div className = " container d-flex flex-column justify-content-between" >
                    <h2 className="text-center mb-5 mt-3"  >TERMENI SI CONDITII DE UTILIZARE A SITE-ULUI <br />
                    www.sirluggia.ro</h2>
                    <p  className = "text-center mb-5 " >
                        Orice accesare sau vizitare a site-ului www.corinthshop.ro ori utilizarea Serviciilor oferite 
                        prin intermediul acestui Site implică acceptarea Termenilor și condițiilor expuse în cele 
                        ce urmează, în afară de cazul în care pentru Conținutul respectiv există condiții de folosire
                         distinct formulate  sau  dispuneți de un alt acord de utilizare valid încheiat. În cazul în care
                          nu sunteți de acord cu Termenii și Condițiile expuse în prezentul Document, 
                          vă rugăm să nu utilizați acest Site.
                          <br/><br/>
                        Acest site este operat de societatea Graftex Prodcom srl, are  sediul in Soseaua Bucuresti 
                        - Ploiesti, nr. 42 - 44, Cladirea B, Aripa B1,  Etaj 1, Sector 1, Bucuresti, România,  inregistrata 
                        la Registrul Comertului sub nr. J40/6008/1997, identificata cu  CIF RO 9737945, e-mail 
                        protectiadatelor@bigotti.ro, telefon +40 212556781/+40 212556782, capital social  52.620 lei, 
                        cont bancar RO11BTRL04501202845772XX, denumită în cele ce urmeaza Graftex Prodcom srl.
                </p>

                <h4  id="Definitii" >Definitii</h4>

                <p className="mb-5" >
                    Client - Persoana care are sau obține acces la Conținut și Serviciu și care a plasat cel putin o
                    Comanda pe Site; Cont - ansamblul format dintr-o adresă de e-mail și o parolă care permite unui 
                    singur Utilizator accesul la secțiuni restrictionate ale Site-ului prin care se face accesul la 
                    Serviciu sau transmiterea Comenzii, caz în care conține informații despre Client și istoricul Clientului în Site (Comenzi, facturi, garanții Produse, retur etc.);

                    Conținut
                    <br />
                    - orice informație aflată pe Site sau disponibilă în Serviciu care poate fi vizitată, vizualizată 
                    sau accesată de Utilizator/Membru/Client prin intermediul unui echipament electronic;
                    <br />
                    - conținutul oricărei comunicări trimise Utilizatorilor/Membrilor/Clienților de către Graftex Prodcom 
                    prin mijloace electronice și/sau orice alt mijloc de comunicare disponibil;
                    <br />
                    - orice informație comunicată prin orice mijloc de către un angajat/colaborator al Graftex Prodcom 
                    Membrilor/Clienților conform informațiilor de contactare specificate de către acesta;
                    <br />
                    - informații legate de Produsele și/sau prețurile practicate de Graftex Prodcom întro anumită perioadă;
                    <br />
                    - informații legate de Produsele, serviciile și/sau prețurile  practicate de către un terț cu
                     care Graftex Prodcom are încheiate contracte de parteneriat, într-o anumită perioadă;
                    <br />
                    - date referitoare la Graftex Prodcom sau alte date ale acesteia;

                    Comandă – operațiunea prin care Clientul își exprimă intenția de a achiziționa produse
                     comercializate prin intermediul Site-ului de către Graftex Prodcom;

                    Contract - reprezintă înţelegerea consensuală la distanţă intervenită între Graftex Prodcom şi 
                    Client cu privire la vânzarea, respectiv achiziţionarea, unuia sau mai multor Produse de pe Site,
                     prin lansarea unei Comenzi de către Client şi acceptarea ei de către Vânzător, cu respectarea
                      prevederilor legale şi a Termenilor şi Condițiilor;

                    Document - prezentele Termeni și Condiții;

                    Membru - Persoana fizica care are sau obtine acces la Conținut, prin orice mijloc de comunicare sau
                     in baza unui acord de utilizare și care necesită crearea și utilizarea unui Cont;

                    Newsletter - mijloc de informare periodic, exclusiv electronic, respectiv poșta electronică sau
                     altă formă de comunicare la distanţă (e-mail, SMS) asupra Produselor și/sau a promoțiilor 
                     desfășurate de Graftex Prodcom într-o anumită perioadă;

                    Produse - Orice bunuri (produse) care sunt puse la dispoziţia Utilizatorului de către Graftex 
                    Prodcom în vederea achiziţionării, contra cost, prin utilizarea Site-ului.

                    Serviciu - Serviciul de comerț electronic desfășurat exclusiv pe secțiunile public disponibile
                     ale Site-ului,  în sensul acordării posibilității Utilizatorilor de a Contracta produse folosind
                      mijloace exclusiv electronice, inclunzând și alte mijloace de comunicare la distanță (telefonic).
                       Produsele oferite prin intermediul acestui Site sunt disponibile pentru livrare în țările Uniunii Europene.

                    Site – domeniul www.corinthshop.ro și subdomeniile acestuia.

                    Specificații – toate specificațiile și/sau descrierile Produselor așa cum sunt precizate în descrierea acestora.

                    Utilizator - Persoana fizică care are sau obtine acces la Conținut, prin orice mijloc de comunicare
                     electronic, care nu are un Cont creat și nu a plasat nicio comandă pe Site.

                    Tranzacție - operaţiunea de plată, respectiv încasare, a unei sume de bani ca urmare a vânzării,
                     respectiv achiziţionării, unui Produs prin intermediul Site-ului.

                </p>

                <h4 id="DISPOZIȚII GENERALE"  >DISPOZIȚII GENERALE</h4>
                <p className="mb-5"  >
                    Graftex Prodcom poate modifica în orice moment acest Document pentru a reflecta modificari ale 
                    legislației, ale politicilor interne sau ale tehnologiei folosite. Orice modificări aduse 
                    Documentului vor intra în vigoare în cazul Serviciilor doar pentru comenzile înregistrate 
                    după publicarea modificărilor respective pe acest Site.Graftex Prodcom are dreptul, în orice
                    moment, să modifice, să suspende sau să înceteze comercializarea online a Produselor, parţial
                    sau în totalitate, temporar sau permanent, cu sau fără anunț / notificare prealabil/ă/.
                    Graftex Prodcom va depune eforturile tehnice pentru asigurarea funcționării în bune condiții
                    a Site-ului. În cazul în care vor exista întreruperi în funcționare sau imposibilități de accesare
                    de către Utilizatori/ Clienți/Membrii pe o perioada determinată de timp Graftex Prodcom nu va 
                    fi răspunzător față de nicio persoană pentru nicio daună sau pentru pierderi suferite, rezultate 
                    direct sau indirect ca urmare a folosirii necorespunzătoare a Servicului furnizat, a nefuncționării
                    Serviciului din motive de ordin tehnic și/sau din acțiunea unor terți.Graftex Prodcom va depune 
                    diligențele necesare pentru realizarea scopului Site-ului și nu are nicio responsabilitate cu privire
                    la Conținutul postat de Utilizatori în cadrul Serviciilor.Graftex Prodcom nu își asumă nicio responsabilitate
                    și nu va fi răspunzător pentru nicio daună sau viruși care ar putea sa vă afecteze computerul sau alte
                    echipamente electronice în urma accesarii sau utilizarii acestui Site sau descărcării oricărui material,
                    informații, text, imagini video sau audio de pe site.
                    Accesarea acestui Site se realizează pe riscul propriu al utilizatorului, Graftex Prodcom nefiind în niciun
                    fel răspunzătoar pentru orice prejudicii directe sau indirecte determinate de accesarea Site-ului sau ca urmare
                    a  efectuării/finalizării unei Comenzi sau oricărei utilizări a datelor şi informațiilor de pe acest Site. 
                </p>
                <h4 id = "POLITICA DE VÂNZARE ONLINE"  >POLITICA DE VÂNZARE ONLINE</h4>
                <p className="mb-5" >
                Accesul pe Site în vederea efectuării unei Comenzii îi este permis oricărui Utilizator care acţionează cu un 
                scop legitim şi care are intenţia de a achiziţiona de la Vânzător unul sau mai multe Produse, cu respectarea
                 prezentului Document.
                Pot efectua Comenzi pe Site numai persoanele care au împlinit vârsta de 18 ani la data efectuării Comenzii 
                şi doresc ca livrarea Produselor să aibă loc pe teritoriul Uniunii Europene.
                Nu exista o valoare minima pentru efectuarea unei comezi pe Site.
                Graftex Prodcom  comercializează Produsele online în sistem en-detail (comerț cu amănuntul), nefiind destinate 
                revânzării sau distribuției în scopuri comerciale.
                Graftex Prodcom îşi rezervă dreptul de a refuza accesul unor Utilizatori/ Membrii/Clienți la o parte sau la toate 
                funcțiile aferente comercializării online, cât și de a restricționa procesarea și/sau livrarea unei Comenzi în cazul 
                în care există suspiciuni de fraudă din partea acestora sau dacă acesta are un comportament care poate prejudicia 
                interesele Graftex Prodcom.
                Postarea opiniilor referitoare la produse sau comunicarea  cu Graftex Prodcom se poate realiza prin utilizarea 
                datelor menționate la secțiunea “Contact” din Site. Vor fi înlăturate din Site sau ignorate, păreri sau adresări 
                ce conțin injurii sau un limbaj neadvecat, Graftex Prodcom având libertatea de a gesiona informațiile primite 
                fără a fi nevoit să justifice acțiunile sale.
                </p>

                </div>

                </Layout>
        </>
    )
}


export default Terms_and_conditions;