import React from "react";
import './About.css';
// src에 사용할 파일은 반드시 import가 필요 | 이미지도 변수설정후 경로지정후 사용
// import poster from './images/god_poster.jpg';
import poster_small from './images/god_poster_small.jpg';

function About(){
    const gfa = "대부포스터";
    return (
        <div className="about_container">
            <p>
                {/* <img src={poster} alt={'대부포스터'}/> */}
                <img src={poster_small} alt={gfa}/>
            </p>
            <span>
                I'm gonna make him an offer he can't refuse <br />
                절대 거절하지 못할 제안을 하지 <br /><br />

                Never hate your enemies. It affects your judgement. <br />
                적들을 미워하지 마라. 그러면 판단력이 흐려져. <br /><br />

                Keep your friends close and your enemies closer <br />
                친구는 가까이 두고, 적은 더 가까이 두어야 한다 <br /><br />

                Never let anyoe know what your are thinking <br />
                네 생각을 절대 남한테 알려서는 안된다 <br /><br />

                A man who is not a father to his children can never be a real man <br />
                자기 아이에게 아버지가 아닌 남자는 진정한 남자가 될 수 없다 <br /><br />

                Life is so beautiful <br />
                인생은 아름다워 <br /><br />

                Only don't tell me you're innocent. Because it insults my intelligence. Makes me very angry. <br />
                결백하다고 말하지 마. 그건 내 지성을 모독하는거야. 날 굉장히 화나게 만들어. <br /><br />

                You know the saddest thing about betrayal? It never comes from an enemy. <br />
                배신에 관해 제일 슬픈 사실이 뭔지 알아? 그건 결코 적으로부터 오는게 아니라는 거야. <br /><br />

                Confidence is silent. Insecurities are loud. <br />
                자신감은 조용하고 불안감은 시끄럽다. <br /><br />

                Complaining is silly. Either act or forget. <br />
                불평하는건 어리석어. 행동을 취하거나 잊어버려라. <br /><br />
            </span>
            <span> - The God Father, 1972 </span>
        </div>
    );
}
export default About;