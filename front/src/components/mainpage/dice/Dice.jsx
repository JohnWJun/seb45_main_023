import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import "./Dice.css";
import { diceValueState } from "../../../recoil/main";

const DICE_SIDES = {
	FRONT: "1",
	BACK: "2",
	RIGHT: "3",
	LEFT: "4",
	TOP: "5",
	BOTTOM: "6",
};

function Side({ direction, isVisible }) {
	const getTransform = () => {
		switch (direction) {
			case DICE_SIDES.FRONT:
				return "rotateY(0deg) translateZ(30px)";
			case DICE_SIDES.BACK:
				return "rotateY(180deg) translateZ(30px)";
			case DICE_SIDES.RIGHT:
				return "rotateY(90deg) translateZ(30px)";
			case DICE_SIDES.LEFT:
				return "rotateY(-90deg) translateZ(30px)";
			case DICE_SIDES.TOP:
				return "rotateX(90deg) translateZ(30px)";
			case DICE_SIDES.BOTTOM:
				return "rotateX(-90deg) translateZ(30px)";
			default:
				return "";
		}
	};

	const transformStyle = getTransform();

	return (
		<div
			className={`side ${direction} visible`}
			style={{ transform: transformStyle }}
		>
			{direction}
		</div>
	);
}

function Dice({ onRollDice }) {
	const [diceValue, setDiceValue] = useRecoilState(diceValueState); // diceValueState를 상태로 사용
	const [visibleSide, setVisibleSide] = useState(DICE_SIDES.FRONT);
	const [diceAnimationClass, setDiceAnimationClass] = useState("dice");

	useEffect(() => {
		if (diceValue !== undefined) {
			if (diceValue >= 1) {
				setDiceAnimationClass("dice-fast");
				setTimeout(() => {
					setDiceAnimationClass("dice-stop");
					setVisibleSide(diceValue.toString());
				}, 3000);
			} else {
				setDiceAnimationClass("dice");
			}
		}
		DICE_SIDES.FRONT = diceValue;
	}, [diceValue]);

	const rollDiceHandler = async () => {
		const newValue = Math.floor(Math.random() * 6) + 1;
		setDiceValue(newValue); // 주사위 값을 업데이트
		return newValue; // 주사위 값 반환
	};

	return (
		<div
			className={`dice absolute top-1/2 left-1/2 z-100 cursor-pointer ${diceAnimationClass}`}
			onClick={async () => {
				const newValue = await rollDiceHandler();
				// 주사위 값을 부모 컴포넌트로 전달
				// 아래와 같이 주사위 값 변경 이벤트를 부모 컴포넌트에서 처리하도록 콜백 함수를 호출
				onRollDice(newValue);
			}}
		>
			<Side
				direction={DICE_SIDES.FRONT}
				isVisible={visibleSide === DICE_SIDES.FRONT}
			/>
			<Side
				direction={DICE_SIDES.BACK}
				isVisible={visibleSide === DICE_SIDES.BACK}
			/>
			<Side
				direction={DICE_SIDES.RIGHT}
				isVisible={visibleSide === DICE_SIDES.RIGHT}
			/>
			<Side
				direction={DICE_SIDES.LEFT}
				isVisible={visibleSide === DICE_SIDES.LEFT}
			/>
			<Side
				direction={DICE_SIDES.TOP}
				isVisible={visibleSide === DICE_SIDES.TOP}
			/>
			<Side
				direction={DICE_SIDES.BOTTOM}
				isVisible={visibleSide === DICE_SIDES.BOTTOM}
			/>
		</div>
	);
}

export default Dice;
