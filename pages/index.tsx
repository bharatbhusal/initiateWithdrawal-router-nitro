import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	const [srcToken, setSrcToken] = useState<string>("");
	const [depositId, setDepositId] = useState<number>();

	const handleIDepositInfoUpdate = async () => {
		console.log("Deposit Info Updated");
	};

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		setSrcToken(event.target.srcToken.value);
		setDepositId(event.target.depositId.value);
		handleIDepositInfoUpdate();
		console.log(srcToken, depositId);
	};
	return (
		<div className={styles.container}>
			<Head>
				<title>Initiate Withdrawal Router Nitro</title>
			</Head>

			<main className={styles.main}>
				<ConnectButton />

				<h1 className={styles.title}>
					Welcome to{" "}
					<a href="https://app.routernitro.com/swap">
						Router Nitro!
					</a>
				</h1>

				<p className={styles.description}>
					Fill up the details to initital the withdrawal on
					behalf of the user.
				</p>
				<form className={styles.form} onSubmit={handleSubmit}>
					<label htmlFor="srcToken">Source Token :</label>
					<input type="text" id="srcToken" name="srcToken" />

					<label htmlFor="depositId">DepositId :</label>
					<input type="text" id="depositId" name="depositId" />

					<button type="submit">Initiate Withdrawal</button>
				</form>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://github.com/bharatbhusal"
					rel="noopener noreferrer"
					target="_blank"
				>
					Made by Bharat Bhusal
				</a>
			</footer>
		</div>
	);
};

export default Home;
