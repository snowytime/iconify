/**
 * Function that handles the building of all the icons
 */

const handleEmail = (email: string) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const odds = Math.random();
			if (odds > 0.5) {
				reject(`Error sending email to ${email}`);
				return;
			}
			console.log(`email to ${email} sent successfully`);
			resolve(`email to ${email} sent successfully`);
		}, 1000);
	});
};

const sendEmail = async (email: string) => {
	handleEmail(email).catch((e) => crashlytic(e));
};

const second = async () => {
	return new Promise((resolve, reject) => {
		const odds = Math.random();
		if (odds > 0.5) {
			throw "transaction declined";
		}
		resolve("Success");
	});
};

const main = async () => {
	try {
		// if first fails, we want to handle that individually
		await second();
		await sendEmail("snaer@salties.io");
		await sendEmail("halldor@salties.io");
		await sendEmail("hello@salties.io");
	} catch (e) {
		console.log(e);
	}
};

main();

const crashlytic = (error: Error) => console.log({ error });
