import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useWriteContract } from "wagmi";
import { abi } from "./abi";

const Home: NextPage = () => {
	const { writeContractAsync } = useWriteContract();
	const handleIDepositInfoUpdate = async (
		srcToken: string,
		depositId: number
	) => {
		const res = await writeContractAsync({
			address: "0xF550605cb56fBBA5c0F0e01174CF4e707ce0C9Ca", //sepolia
			abi,
			functionName: "iDepositInfoUpdate",
			args: [srcToken, 0, depositId, true],
		});

		console.log("Deposit Info Updated", res);
	};

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		await handleIDepositInfoUpdate(
			event.target.srcToken.value,
			event.target.depositId.value
		);
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
					<input type="number" id="depositId" name="depositId" />

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
