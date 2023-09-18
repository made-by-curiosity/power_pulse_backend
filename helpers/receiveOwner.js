const receiveOwner = (req) => {
	const { _id: owner } = req.user;
	const { name, date } = req.body;

	return {
		name,
		date,
		owner,
	}
}

module.exports = receiveOwner;