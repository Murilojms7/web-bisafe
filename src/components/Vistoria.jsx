export default function Vistoria(){
    return(
        <>
        
        <h1 class="survey">Vistoria</h1>
        <hr class="survey_line" color="#000000"></hr>
       
        <div id="bike_ns">
            <h1>Número de série</h1>
            <input class="input_ns" name="text" type="file" />
        </div>

        <div id="bike_fb">
            <h1>Foto da Bicicleta</h1>
            <input class="input_fb" name="text" type="file" />
        </div>

        <div id="bike_g">
            <h1>Guidão</h1>
            <input class="input_g" name="text" type="file" />
        </div>

        <div id="bike_ft">
            <h1>Freio traseiro</h1>
            <input class="input_ft" name="text" type="file" />
        </div>

        <div id="bike_b">
            <h1>Banco</h1>
            <input class="input_b" name="text" type="file" />
        </div>

        <div id="bike_fd">
            <h1>Freio dianteiro</h1>
            <input class="input_fd" name="text" type="file" />
        </div>

        <div id="bike_rt">
            <h1>Roda traseira</h1>
            <input class="input_rt" name="text" type="file" />
        </div>

        <div id="bike_cp">
            <h1>Coroa e Pedal</h1>
            <input class="input_cp" name="text" type="file" />
        </div>

        <div id="bike_rd">
            <h1>Roda dianteira</h1>
            <input class="input_rd" name="text" type="file" />
        </div>

        <button class="bn_send_ar">
            <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <span>Send</span>
        </button>

        </>
    )
}