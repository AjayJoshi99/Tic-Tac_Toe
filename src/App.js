import './App.css';
import Board from "./Board";
import Info from "./Info";
import { useState } from "react";

function App() {
	
	const [reset, setReset] = useState(false);
	const [winner, setWinner] = useState("");


	const resetBoard = () => {
		setReset(true);
	};

	return (
		<div className="App"  style={{
      backgroundImage: 'url("/background.png")',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}>
   
      <span className="title">Tic-Tac-Toe</span>
			<div
				className={`winner ${
					winner !== "" ? "" : "shrink"
				}`}
			>
				<div className="winner-text">{winner}</div>
        <br/>
				<button onClick={() => resetBoard()}>
					Reset Board
				</button>
			</div>
			
			<Board
				reset={reset}
				setReset={setReset}
				winner={winner}
				setWinner={setWinner}
			/>
			<Info />
		</div>
	);
}

export default App;

