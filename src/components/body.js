"use client";

export default function Body(){

    function Calculate(){
        const billAmount = document.querySelector("#calTip").value;
        const howWasYourservice = document.querySelector("#serviceQuality").value;
        let numPeople = document.querySelector("#totalPeople").value;
        const resultField = document.querySelector('#hidden');

        console.log('billamount: ', billAmount);
        console.log('howwasyourservice: ', howWasYourservice);
        console.log('numpeople: ', numPeople)

        if (billAmount === "" || howWasYourservice == 0) {
            //display error
            return;
        }

        if ( numPeople === "" || numPeople <= 1 ) {
            numPeople= 1;

            resultField.style.display = "none"
        } else {
            resultField.style.display = "block"
        }
         
        let total = (billAmount * howWasYourservice) / numPeople;
        total = Math.round(total * 100) / 100;
        total = total.toFixed(2);

        resultField.style.display = "block"
        document.querySelector('#actualResult').innerHTML = total;
    }  
        
    return(
        <>
        <div className=" h-screen bg-[url('/p7.jpg')] bg-no-repeat bg-cover flex items-center justify-center flex-col">
            <div className=" bg-white h-4/6 w-96 "> 
            <h1 className=" text-red-700 font-bold text-3xl text-center  m-10  border-b-2 pb-3 ">Tip calculator</h1>
                <form className=" text-left mx-8 ">
                    <label className="text-red-600 block font-bold">
                        How much was your?<br/>
                        $ <input id="calTip" className=" w-16 border text-black border-black" type="text"/><br/>
                    </label>
                    {<label className="text-red-600 block my-4 font-bold">
                        How was your service?<b/>
                        <select className="text-black border border-black font-normal" id="serviceQuality">
                            <option disable selected value="0"> --- Choose an option-- </option>
                            <option value="0.3"> 30%- Outstanding</option>
                            <option value="0.2"> 20% - Good</option>
                            <option value="0.15"> 15% It was okay</option>
                            <option value="0.1"> 10% - Bad</option>
                            <option value="0.05"> 5% - Terrible </option>
                        </select>
                    </label>}
                    <label className="text-red-600 font-bold" >
                        How many people are sharing the bill <br/>
                        <input id="totalPeople" type="text" className="text-red-600 w-16 border m-3 border-black"/> People
                    </label>
                    <button type="button"  className=" bg-red-700 px-11 py-2 border-red-50 border ml-16 bottom-5 font-bold text-white" onClick={(e) => Calculate()}> CALCULATE! </button>
            </form>
           
            </div>
            <div className=" relative bottom-32 hidden" id="hidden">
                <div className=" text-red  text-xs text-center">TIP AMOUNT</div>
                <div>
                <sup className=" text-lg">$</sup><span id="actualResult" className=" text-red-800 text-5xl">0.00</span>
                <br></br>
                <small className=""> Each </small>
            </div>
           
            </div>
        </div>

    </>
    )     
}