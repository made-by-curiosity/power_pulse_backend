const receiveOwner = (req) => {
	const { _id: owner } = req.user;
	const { name, date } = req.query;

	return {
		name,
		date,
		owner,
	}
}

module.exports = receiveOwner;