import styled from "./SityAndInfo.module.scss"

function SityAndInfo(){
    return(
        <div className={styled.main}>
            <div className={styled.inputCity}>
                <svg></svg>
                <input type="text" />
            </div>
            <div className={styled.timeSun}>
                <div className={styled.sunrise}></div>
                <div className={styled.sunset}></div>
            </div>
            <div className={styled.line}></div>
            <ul>
                <li>Lorem, ipsum.<span>Lorem.</span></li>
                <li>Lorem, ipsum.<span>Lorem.</span></li>
                <li>Lorem, ipsum.<span>Lorem.</span></li>
                <li>Lorem, ipsum.<span>Lorem.</span></li>
            </ul>
        </div>
    )
}

export default SityAndInfo