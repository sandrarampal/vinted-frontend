const Owner = ({ owner }) => {
  return (
    <div className="owner">
      {owner.account.avatar && (
        <img
          src={owner.account.avatar.secure_url}
          alt="avatar de l'utilisateur"
        />
      )}
      <p>{owner.account.username}</p>
    </div>
  );
};

export default Owner;
