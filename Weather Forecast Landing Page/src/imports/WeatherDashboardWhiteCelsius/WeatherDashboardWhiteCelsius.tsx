import imgNavigation1 from "./eb5a88ad7a4e422bd09dc15e5d8255f5a6ae84f6.png";
import imgClear3 from "./efa2cf5a1d7b9e01f29bf7c83b014121c2d853b7.png";
import imgClouds2 from "./bf196c94cbfcbafce4cd54305df699239636628b.png";
import imgRain1 from "./cd44fde229b4d987b7c3c469c28b1c201ddc576e.png";
import imgDrizzle1 from "./e1e7e0a06f2880e6e77ac6112553fbada8fad045.png";
import imgMist1 from "./560a0b94f13d5b080d9f2330f9f316ec0c49f9bb.png";
import imgUvWhite1 from "./831f5bd881a83e237073b59ad64aa75e43b239a4.png";
import imgPressureWhite1 from "./0798a096e7645915e092aa210c94e6df82a1fe2f.png";
import imgWind1 from "./a947cdfb75b7c15dd0ba477dc1629d8f08085300.png";
import imgHumidity1 from "./eed64397d70cae4f296d87efced42a104d6c2fb3.png";
import imgSunsetWhite1 from "./11517c7db62a2cd15c5ff2281907055548227c8d.png";
import imgSunriseWhite1 from "./d68ce075d41fb0a8f5d40486e470c1fe642bc7ed.png";
import imgCurrentLocationIcon from "./aa5f570c1e046d0137294425341c52e6ac4c5293.png";
import imgSearch1 from "./1046ed0805cd02df74220cfda91b4da36b9b9601.png";

function Wind() {
  return (
    <div className="absolute contents left-[693px] top-[237px]" data-name="Wind">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[693px] not-italic text-[#292929] text-[20px] top-[302px] whitespace-nowrap">3km/h</p>
      <div className="absolute left-[697px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[55px] top-[237px]" data-name="navigation 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNavigation1} />
      </div>
    </div>
  );
}

function Temperature() {
  return (
    <div className="absolute contents left-[688px] top-[122px]" data-name="Temperature">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[700px] not-italic text-[#292929] text-[20px] top-[203px] whitespace-nowrap">22°C</p>
      <div className="absolute left-[688px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[80px] top-[122px]" data-name="clear 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgClear3} />
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[660px] top-[80px]">
      <div className="absolute h-[270px] left-[660px] rounded-[40px] top-[80px] w-[130px]" style={{ backgroundImage: "linear-gradient(156.519deg, rgb(68, 61, 100) 19.207%, rgba(101, 130, 198, 0) 158.48%)" }} />
      <Wind />
      <Temperature />
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[691px] not-italic text-[#292929] text-[24px] top-[93px] whitespace-nowrap">00:00</p>
    </div>
  );
}

function Wind1() {
  return (
    <div className="absolute contents left-[544.93px] top-[226.93px]" data-name="Wind">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[548px] not-italic text-[#292929] text-[20px] top-[302px] whitespace-nowrap">3km/h</p>
      <div className="absolute flex items-center justify-center left-[544.93px] size-[75.131px] top-[226.93px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-30">
          <div className="relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[55px]" data-name="navigation 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNavigation1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Temperature1() {
  return (
    <div className="absolute contents left-[540px] top-[122px]" data-name="Temperature">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[555px] not-italic text-[#292929] text-[20px] top-[203px] whitespace-nowrap">25°C</p>
      <div className="absolute left-[540px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[80px] top-[122px]" data-name="clouds 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgClouds2} />
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[515px] top-[80px]">
      <div className="absolute h-[270px] left-[515px] rounded-[40px] top-[80px] w-[130px]" style={{ backgroundImage: "linear-gradient(167.094deg, rgb(68, 61, 100) 15.918%, rgba(101, 130, 198, 0) 192.45%)" }} />
      <Wind1 />
      <Temperature1 />
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[546px] not-italic text-[#292929] text-[24px] top-[93px] whitespace-nowrap">21:00</p>
    </div>
  );
}

function Wind2() {
  return (
    <div className="absolute contents left-[404px] top-[237px]" data-name="Wind">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[404px] not-italic text-[#292929] text-[20px] top-[302px] whitespace-nowrap">2km/h</p>
      <div className="absolute left-[407px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[55px] top-[237px]" data-name="navigation 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNavigation1} />
      </div>
    </div>
  );
}

function Temperature2() {
  return (
    <div className="absolute contents left-[395px] top-[122px]" data-name="Temperature">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[411px] not-italic text-[#292929] text-[20px] top-[203px] whitespace-nowrap">27°C</p>
      <div className="absolute left-[395px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[80px] top-[122px]" data-name="clouds 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgClouds2} />
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[370px] top-[80px]">
      <div className="absolute h-[270px] left-[370px] rounded-[40px] top-[80px] w-[130px]" style={{ backgroundImage: "linear-gradient(158.07deg, rgb(248, 133, 8) 15.977%, rgba(246, 250, 217, 0) 150.58%)" }} />
      <Wind2 />
      <Temperature2 />
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[401px] not-italic text-[#292929] text-[24px] top-[93px] whitespace-nowrap">18:00</p>
    </div>
  );
}

function Wind3() {
  return (
    <div className="absolute contents left-[243px] top-[227px]" data-name="Wind">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[258px] not-italic text-[#292929] text-[20px] top-[302px] whitespace-nowrap">2km/h</p>
      <div className="absolute flex items-center justify-center left-[243px] size-[75.131px] top-[227px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-30 flex-none">
          <div className="relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[55px]" data-name="navigation 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNavigation1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Temperature3() {
  return (
    <div className="absolute contents left-[250px] top-[122px]" data-name="Temperature">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[265px] not-italic text-[#292929] text-[20px] top-[203px] whitespace-nowrap">27°C</p>
      <div className="absolute left-[250px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[80px] top-[122px]" data-name="clear 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgClear3} />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[225px] top-[80px]">
      <div className="absolute h-[270px] left-[225px] rounded-[40px] top-[80px] w-[130px]" style={{ backgroundImage: "linear-gradient(163.08deg, rgb(248, 133, 8) 7.4173%, rgba(246, 250, 217, 0) 144%)" }} />
      <Wind3 />
      <Temperature3 />
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[256px] not-italic text-[#292929] text-[24px] top-[93px] whitespace-nowrap">15:00</p>
    </div>
  );
}

function Wind4() {
  return (
    <div className="absolute contents left-[113px] top-[237px]" data-name="Wind">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[113px] not-italic text-[#292929] text-[20px] top-[302px] whitespace-nowrap">3km/h</p>
      <div className="absolute left-[118px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[55px] top-[237px]" data-name="navigation 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNavigation1} />
      </div>
    </div>
  );
}

function Temperature4() {
  return (
    <div className="absolute contents left-[105px] top-[122px]" data-name="Temperature">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[120px] not-italic text-[#292929] text-[20px] top-[202px] whitespace-nowrap">26°C</p>
      <div className="absolute left-[105px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[80px] top-[122px]" data-name="clear 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgClear3} />
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[80px] top-[80px]">
      <div className="absolute h-[270px] left-[80px] rounded-[40px] top-[80px] w-[130px]" style={{ backgroundImage: "linear-gradient(161.253deg, rgb(248, 133, 8) 12.412%, rgba(246, 250, 217, 0) 163.32%)" }} />
      <Wind4 />
      <Temperature4 />
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[111px] not-italic text-[#292929] text-[24px] top-[93px] whitespace-nowrap">12:00</p>
    </div>
  );
}

function HourlyForecast() {
  return (
    <div className="absolute bg-[#d9d9d9] h-[366px] left-[555px] rounded-[30px] shadow-[10px_10px_4px_0px_rgba(0,0,0,0.5)] top-[553px] w-[870px]" data-name="Hourly Forecast">
      <Group9 />
      <Group8 />
      <Group7 />
      <Group6 />
      <Group5 />
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[306px] not-italic text-[#292929] text-[32px] top-[13px] whitespace-nowrap">Hourly Forecast:</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[30px] top-[308px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[50px] justify-center leading-[0] left-[calc(50%+30px)] not-italic text-[#292929] text-[20px] top-[calc(50%+150px)] w-[163px]">
        <p className="leading-[normal]">Tuesday, 5 Sep</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[50px] justify-center leading-[0] left-[calc(50%-43px)] not-italic text-[#292929] text-[24px] text-center top-[calc(50%+150px)] w-[62px]">
        <p className="leading-[normal]">16°C</p>
      </div>
      <div className="absolute left-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[60px] top-[308px]" data-name="rain 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRain1} />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[30px] top-[248px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[60px] justify-center leading-[0] left-[calc(50%+111.5px)] not-italic text-[#292929] text-[20px] text-center top-[calc(50%+95px)] w-[163px]">
        <p className="leading-[normal]">Monday, 4 Sep</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[60px] justify-center leading-[0] left-[calc(50%-43px)] not-italic text-[#292929] text-[24px] text-center top-[calc(50%+95px)] w-[62px]">
        <p className="leading-[normal]">18°C</p>
      </div>
      <div className="absolute left-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[60px] top-[248px]" data-name="drizzle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDrizzle1} />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[30px] top-[188px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[60px] justify-center leading-[0] left-[calc(50%+111.5px)] not-italic text-[#292929] text-[20px] text-center top-[calc(50%+35px)] w-[163px]">
        <p className="leading-[normal]">Sunday, 3 Sep</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[60px] justify-center leading-[0] left-[calc(50%-43px)] not-italic text-[#292929] text-[24px] text-center top-[calc(50%+35px)] w-[62px]">
        <p className="leading-[normal]">27°C</p>
      </div>
      <div className="absolute left-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[60px] top-[188px]" data-name="clear 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgClear3} />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[30px] top-[128px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[60px] justify-center leading-[0] left-[calc(50%+111.5px)] not-italic text-[#292929] text-[20px] text-center top-[calc(50%-25px)] w-[163px]">
        <p className="leading-[normal]">Saturday, 2 Sep</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[60px] justify-center leading-[0] left-[calc(50%-43px)] not-italic text-[#292929] text-[24px] text-center top-[calc(50%-25px)] w-[62px]">
        <p className="leading-[normal]">22°C</p>
      </div>
      <div className="absolute left-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[60px] top-[128px]" data-name="mist 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMist1} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[30px] top-[68px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[60px] justify-center leading-[0] left-[calc(50%+111.5px)] not-italic text-[#292929] text-[20px] text-center top-[calc(50%-85px)] w-[163px]">
        <p className="leading-[normal]">Friday, 1 Sep</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[60px] justify-center leading-[0] left-[calc(50%-43px)] not-italic text-[#292929] text-[24px] text-center top-[calc(50%-85px)] w-[62px]">
        <p className="leading-[normal]">20°C</p>
      </div>
      <div className="absolute left-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[60px] top-[68px]" data-name="clouds 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgClouds2} />
      </div>
    </div>
  );
}

function Grid() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[366px] left-[calc(50%-469px)] top-[calc(50%+245px)] w-[414px]" data-name="Grid">
      <Group4 />
      <Group3 />
      <Group2 />
      <Group1 />
      <Group />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[50px] justify-center leading-[0] left-[206.5px] not-italic text-[#292929] text-[32px] text-center top-[43px] w-[279px]">
        <p className="leading-[normal]">5 Days Forecast:</p>
      </div>
    </div>
  );
}

function Component5DaysForecast() {
  return (
    <div className="absolute contents left-[80px] top-[553px]" data-name="5Days Forecast">
      <div className="absolute bg-[#d9d9d9] h-[366px] left-[80px] rounded-[30px] top-[553px] w-[414px]" data-name="5Days Forecast" />
      <Grid />
    </div>
  );
}

function TextTime() {
  return (
    <div className="absolute contents leading-[normal] left-[calc(50%+7.5px)] not-italic text-[#292929] text-center top-[237.9px]" data-name="Text&Time">
      <p className="-translate-x-1/2 absolute font-['Poppins:Medium',sans-serif] h-[32.196px] left-[calc(50%+61.2px)] text-[16px] top-[278.75px] w-[107.396px]">UV</p>
      <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] h-[40.668px] left-[calc(75%+0.52px)] text-[20px] top-[237.9px] w-[104.57px]">8</p>
    </div>
  );
}

function Uv() {
  return (
    <div className="absolute contents left-[calc(50%+7.5px)] top-[172px]" data-name="UV">
      <TextTime />
      <div className="absolute left-[calc(50%+33.5px)] size-[58px] top-[172px]" data-name="uv-white 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUvWhite1} />
      </div>
    </div>
  );
}

function TextTime1() {
  return (
    <div className="absolute contents leading-[normal] left-0 not-italic text-[#292929] text-center top-[237.9px]" data-name="Text&Time">
      <p className="-translate-x-1/2 absolute font-['Poppins:Medium',sans-serif] h-[32.195px] left-[56.65px] text-[16px] top-[278.75px] w-[113.303px]">Pressure</p>
      <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] h-[40.667px] left-[calc(25%-2.97px)] text-[20px] top-[237.9px] w-[110.321px]">997hPa</p>
    </div>
  );
}

function Pressure() {
  return (
    <div className="absolute contents left-0 top-[172px]" data-name="Pressure">
      <TextTime1 />
      <div className="absolute left-[28px] size-[58px] top-[172px]" data-name="pressure-white 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPressureWhite1} />
      </div>
    </div>
  );
}

function TextTime2() {
  return (
    <div className="absolute contents leading-[normal] left-[calc(50%+7.5px)] not-italic text-[#292929] text-center top-[85.9px]" data-name="Text&Time">
      <p className="-translate-x-1/2 absolute font-['Poppins:Medium',sans-serif] h-[32.196px] left-[calc(50%+61.2px)] text-[16px] top-[126.75px] w-[107.396px]">Wind Speed</p>
      <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] h-[40.668px] left-[calc(75%+0.52px)] text-[20px] top-[85.9px] w-[104.57px]">2km/h</p>
    </div>
  );
}

function WindSpeed() {
  return (
    <div className="absolute contents left-[calc(50%+7.5px)] top-[21px]" data-name="Wind speed">
      <TextTime2 />
      <div className="absolute h-[59.241px] left-[calc(50%+32.5px)] top-[21px] w-[60px]" data-name="wind 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWind1} />
      </div>
    </div>
  );
}

function TextTime3() {
  return (
    <div className="absolute contents leading-[normal] left-0 not-italic text-[#292929] text-center top-[85.9px]" data-name="Text&Time">
      <p className="-translate-x-1/2 absolute font-['Poppins:Medium',sans-serif] h-[32.195px] left-[56.65px] text-[16px] top-[126.75px] w-[113.303px]">Humidity</p>
      <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] h-[40.667px] left-[calc(25%-2.97px)] text-[20px] top-[85.9px] w-[110.321px]">41%</p>
    </div>
  );
}

function Humidity() {
  return (
    <div className="absolute contents left-0 top-[26px]" data-name="Humidity">
      <TextTime3 />
      <div className="absolute h-[50.127px] left-[29px] top-[26px] w-[60px]" data-name="humidity 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHumidity1} />
      </div>
    </div>
  );
}

function ExtraDetails() {
  return (
    <div className="absolute h-[328px] left-[calc(66.67%+13px)] top-0 w-[247px]" data-name="Extra Details">
      <Uv />
      <Pressure />
      <WindSpeed />
      <Humidity />
    </div>
  );
}

function IconWeather() {
  return (
    <div className="absolute contents left-[calc(33.33%-6px)] top-[-8px]" data-name="Icon & Weather">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[53px] justify-center leading-[0] left-[calc(33.33%+128.5px)] not-italic text-[#292929] text-[32px] text-center top-[276.5px] w-[129px]">
        <p className="leading-[normal]">Sunny</p>
      </div>
      <div className="absolute left-[calc(33.33%-6px)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[270px] top-[-8px]" data-name="clear 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgClear3} />
      </div>
    </div>
  );
}

function FeelsLike() {
  return (
    <div className="absolute contents left-[29px] not-italic text-[#292929] top-[104px]" data-name="Feels like">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[49.581px] leading-[0] left-[135px] opacity-80 text-[0px] top-[104px] w-[79.858px]">
        <span className="font-['Poppins:SemiBold',sans-serif] leading-[normal] text-[32px]">22</span>
        <span className="font-['Poppins:Bold',sans-serif] leading-[normal] text-[32px]">°C</span>
      </p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] h-[30.512px] leading-[normal] left-[29px] opacity-80 text-[20px] top-[113px] w-[97.262px]">Feels like:</p>
    </div>
  );
}

function TextTime4() {
  return (
    <div className="absolute contents left-[108.82px] not-italic text-[#292929] top-[245px]" data-name="Text&Time">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] h-[24.155px] leading-[normal] left-[108.82px] text-[16px] top-[275.51px] w-[94.332px]">20:37 AM</p>
      <div className="absolute font-['Poppins:Bold',sans-serif] h-[61.023px] leading-[0] left-[108.82px] text-[20px] top-[245px] w-[84.402px]">
        <p className="leading-[normal] mb-0">Sunset</p>
        <p className="leading-[normal]">​</p>
      </div>
    </div>
  );
}

function Sunset() {
  return (
    <div className="absolute contents left-[50px] top-[245px]" data-name="Sunset">
      <TextTime4 />
      <div className="absolute left-[50px] size-[48px] top-[251.33px]" data-name="sunset-white 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSunsetWhite1} />
      </div>
    </div>
  );
}

function TextTime5() {
  return (
    <div className="absolute contents leading-[normal] left-[108.82px] not-italic text-[#292929] top-[180px]" data-name="Text&Time">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] h-[24.155px] left-[108.82px] text-[16px] top-[210.51px] w-[94.332px]">06:37 AM</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] h-[30.512px] left-[108.82px] text-[20px] top-[180px] w-[91.849px]">Sunrise</p>
    </div>
  );
}

function Sunrise() {
  return (
    <div className="absolute contents left-[50px] top-[180px]" data-name="Sunrise">
      <TextTime5 />
      <div className="absolute left-[50px] size-[48px] top-[184px]" data-name="sunrise-white 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSunriseWhite1} />
      </div>
    </div>
  );
}

function MainDetails() {
  return (
    <div className="absolute contents left-[24px] top-[15px]" data-name="Main Details">
      <p className="absolute bg-clip-text font-['Poppins:Bold',sans-serif] h-[77px] leading-[normal] left-[24px] not-italic text-[80px] text-[transparent] top-[15px] w-[204px]" style={{ backgroundImage: "linear-gradient(65.7247deg, rgb(41, 41, 41) 2.9322%, rgba(255, 255, 255, 0) 212.44%)" }}>
        24°C
      </p>
      <FeelsLike />
      <Sunset />
      <Sunrise />
    </div>
  );
}

function WeatherDetails() {
  return (
    <div className="absolute h-[330px] left-[645px] shadow-[10px_10px_4px_0px_rgba(0,0,0,0.5)] top-[174px] w-[780px]" data-name="Weather Details">
      <div className="absolute bg-[#d9d9d9] h-[330px] left-0 rounded-[30px] top-0 w-[780px]" data-name="Weather Details" />
      <ExtraDetails />
      <IconWeather />
      <MainDetails />
    </div>
  );
}

function MainInfos() {
  return (
    <div className="absolute contents leading-[normal] left-[187px] not-italic text-[#292929] top-[227px]" data-name="Main Infos">
      <p className="absolute font-['Poppins:Bold',sans-serif] left-[271px] text-[36px] top-[227px] whitespace-nowrap">Athens</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] left-[187px] text-[96px] top-[310px] w-[296px]">09:03</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] left-[248px] text-[20px] top-[426px] whitespace-nowrap">Thursday, 31 Aug</p>
    </div>
  );
}

function LocationTimeDate() {
  return (
    <div className="absolute contents left-[80px] top-[174px]" data-name="Location, Time, Date">
      <div className="absolute bg-[#d9d9d9] h-[330px] left-[80px] rounded-[30px] top-[174px] w-[510px]" data-name="Date and Time Info" />
      <MainInfos />
    </div>
  );
}

function CurrentLocation() {
  return (
    <div className="absolute contents left-[1143px] top-[63px]" data-name="Current Location">
      <div className="absolute bg-[#4cbb17] h-[62px] left-[1143px] rounded-[40px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.25)] top-[63px] w-[292px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:ExtraBold',sans-serif] h-[62px] justify-center leading-[0] left-[1307px] not-italic text-[22px] text-[rgba(255,255,255,0.8)] text-center top-[94px] w-[200px]">
        <p className="leading-[normal]">Current Location</p>
      </div>
      <div className="absolute left-[1168px] size-[35px] top-[77px]" data-name="current location icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCurrentLocationIcon} />
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="absolute contents left-[259px] top-[63px]" data-name="Search Bar">
      <div className="absolute bg-[#d9d9d9] border border-black border-solid h-[62px] left-[259px] rounded-[40px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.25)] top-[63px] w-[803px]" />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[28px] leading-[normal] left-[361px] not-italic text-[#292929] text-[18px] top-[83px] w-[621px]">Search for your preffered city...</p>
      <div className="absolute h-[46px] left-[292px] top-[71px] w-[40px]" data-name="search 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSearch1} />
      </div>
    </div>
  );
}

function Mode() {
  return (
    <div className="absolute contents left-[78px] top-[63px]" data-name="Mode">
      <div className="absolute bg-[#d9d9d9] border border-black border-solid h-[37.985px] left-[78.99px] rounded-[40px] top-[63px] w-[99.01px]" />
      <div className="absolute h-[29.516px] left-[88.89px] top-[67.92px] w-[29.703px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.703 29.5161">
          <ellipse cx="14.8515" cy="14.7581" fill="var(--fill-0, #111111)" id="Ellipse 2" rx="14.8515" ry="14.7581" />
        </svg>
      </div>
      <p className="absolute font-['Poppins:ExtraBold',sans-serif] h-[17px] leading-[normal] left-[78px] not-italic text-[18px] text-black top-[107px] w-[103px]">Light Mode</p>
    </div>
  );
}

export default function WeatherDashboardWhiteCelsius() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(122.716deg, rgb(255, 255, 255) 0.2848%, rgba(70, 97, 115, 0) 178.65%)" }} data-name="Weather Dashboard - White / Celsius">
      <HourlyForecast />
      <Component5DaysForecast />
      <WeatherDetails />
      <LocationTimeDate />
      <CurrentLocation />
      <SearchBar />
      <Mode />
    </div>
  );
}