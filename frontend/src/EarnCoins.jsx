function EarnCoins() {
  return (
    <>
      <div className="row p-1" style={{ backgroundColor: "#366827" }}>
        <h1
          className="p-5 text-center"
          style={{ color: "white", fontSize: "2rem", fontWeight: "600" }}
        >
          Stay Focused, Earn Coins, and Plant Real Trees with Bagiya
        </h1>
        <div className="text-center">
          <img
            className="mb-2"
            style={{
              width: "40rem",
              borderRadius: ".5rem",
              boxShadow:
                "0 6px 12px 0 rgba(0, 0, 0, 0.4), 0 8px 24px 0 rgba(0, 0, 0, 0.4)",
            }}
            src="Media/images/GrowPlant.png"
            alt=""
          />
          <div
          className="text-center"
          style={{ color: "white"}}
        >
          <p style={{ padding: "2rem 10rem", fontSize: "1.2rem" }}>
            With Bagiya, staying focused on your tasks becomes more rewarding
            than ever. By concentrating on your work and completing tasks, you
            earn virtual coins as a mark of your productivity. These coins
            aren’t just for show—they can be used to plant real trees, allowing
            you to make a positive impact on the environment. Every minute you
            spend focused on your tasks brings you closer to contributing to a
            greener planet. Bagiya not only boosts your personal productivity
            but also empowers you to support real-world sustainability efforts.
            Turn your focus into coins and your coins into trees. Stay
            productive, stay green, with Bagiya!
          </p>
        </div>
        </div>
      </div>
    </>
  );
}

export default EarnCoins;
