import React from "react";
import Tombol from './atoms/tombol';
import Logo from './Logo';
import Navlink from "./Navlink";


export default function Footer() {
    return (
        <footer>
            <div className="row py-5 px-3 ">
                <div className="col-12 bg-light">
                    <div className="row">
                        <div className="col-6">
                            <h3 className="page-title">Konsultasi Lebih Lanjut</h3>
                            <p>ingin konsultasi lebih lanjut?kami siap membantu anda!</p>
                        </div>
                        <div className="col-6 text-end">
                            <Tombol className="btn btn-primary">Kontak Kami</Tombol>
                        </div>
                    </div>
                </div>

                <div className="col-12 bg-secondary">
                    <div className="d-flex justify-content-between py-3 px-3 ">
                        <Logo href="" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAsAMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABAUGAgMHAQj/xABBEAABAwMCBAQEAwQFDQAAAAABAAIDBAUREiEGMUFRE2FxgQcUIpEyUqEjQrHwFWKSweEWJSczNEVygqPCw9Hj/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABgRAQEAAwAAAAAAAAAAAAAAAAABERIx/9oADAMBAAIRAxEAPwD1FERcWhERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARFT8T8RUPDlv+ZrSXPedMMDPxSu7Dy81RceyeywtJbeIuJgyr4guMtoo5j+xt9I7RI4dNbuY9Ofony3BVu/38+KUPLNYushcHt5g4d0+yDdIqC03IPjdLQXNl5oI3aZJGYdND16fjHtn1VwQahjXMmxE4Agxu3cD1z/AOlB34PYp1wq6ax22feemD3fmc92R55yqmttV4s7TU8O1ktSxm77bXSa2yDroed2u7dPRUadFU8OX+k4go3TU2qKeJ2ioppRiSF/Zw7efVWygIiICIiAiIgIiICIiAiIg4TzR00Ek87tEUTS97j0AGV57whSycY8Q1PFNzbmkgkMNBC/dox1HptnzJ7Kf8WLhLTcPRW+mJ8e5TCBuPyjc/3N91PrKWew8K0FrtLXeMDFAHN55Jy933z90Hl/FdZU8QcTTGWpe9jZntpgTgRtG4x58t11us9DTGR8lS06QHO1HkB/HdWfxB4SqbHUPuNNNE+hlm/ZtL8SRucSdOP3hud+2Ntli3SSyyaXyEk7ZJSy1ZW04RrZrBfaKaB7jRVz2xz6zoa0POA456jnv0XsEGhrz4LmmGQkjSchruZx6r85Rw1lWPCBc9zeUbjz7q3sNwr7LI2amfPTOafqiLTpcB5cj6fYqcHvucEHsQfRZX4e3Wa4WyojqZNc0UxcHE76XEuA9twrDhniWlv1tfV/TFLB/tMerZhAzkf1SN/0XLh6yQ2s1M0Gtgq5PEETyCWN6DPudvNVGe4yhk4avFNxZboyYy4QXKFuwew8nEeoxnvjuVtqeaOpgjngcHRSNDmO7gjIXTdaGO52yqoKgB0dRE6N3uNisr8Kq6WWwz2yqOai1zmndv8Au7lv8CPZBtEREBERAREQEREBERAREQeecYt+f+JXDVAd44YzM4eZdn/xhaiW8iSsutulj8OenLXQEHPitcG6T6hxI+3ms1cx/pmt2rkaFmn1/aLWU9NT11zF1MbP2LTFBJjd4zu4+WchvueoVowHxYrzPfbXbHOxHCz5iQD8zsgfoD91jKG2yTAOdG7Lc5IHMAnceY326rQ/FCGSLi6WXG5jgewfmZo0fxaQsxDUVBjkjp5SH5P0H94endZuWoupKyihDSxsRe07+IC0H3HJQai4VNZM2ClJkllcGsiZL4mSeWBpV9wLwXHfKP5m7CpZDISad8UhaXtGx/XfzWstPB1ttTXfJsk11tQadssj9TxA3OsNPQvDSMjo4KawtVXB9iqrZY79VvkMsk0LMMaMB7W/U4j1GoDv7rT8X8SPoII4LVpkrazBhc7cMa44DsdSSRgK4tjB4U7gch878dsA6QB5AAD2WeouHaan4r8Wpmle2NgkoISBoa0bEZ5nRnYdiD0W2WsYHNa0OOXAAE9z1WA4THyXxN4moRsyeJswHmHA/wDeV6AvP7YdXxluWnkKF2f+mg9AREUBERAREQEREBERAREQea/EdtRScZ2Cto8NlqYnUwcSQA7XjfHlKthY7bcqZ4lulwMuhvhx0sH0wxjl6k45f3qp+KNskreGvm6bPzNvlbUxkeWzv0wfZaGw3KK8WajuEH4aiIP9D1b7FBA4s4WouJqdjal74amIHwqiMDIzzB7tPZY2wfDOlkuFU661r6mCln8IMjboExDQTk8wATggdivR66pfC1sdO0PqZNomO5A/mPkP8FyoKRlFSx07HF+nOp55vcTlzj5kkn38lQ8SnpKQaQIoIvoDGN2bg6Q1oHnsFErpo6pkLaCZrqhsgc0xnOgYIcT2+knHnhSGwhxd4n4DI2X/AIXjGfvjPuV8og1j6qJmAGSbDtkA49M526KCRFGyCFscY0xsbgDsAoF7p31NvFRRlrqmld49O5pyC4Dduezm6mn1Vlzz/esVcuG7jaq91w4XmfGJHa3U7X4wTzw0/S5p7FBr6OpiraSGqhOYpmB7fQrBcEO/pD4hcT3IbxxgQtPmX/8Az/VWFFeJLHwbc6mvjbFPRTSsEQdkCRxy1g/tfoufwstb7fwwKioz8xXymoeTzIIw39N/dUbBERQEREBERAREQEREBERBxkY2Rjo5GhzHt0uaeo6hYCxTu4IvdRYKzUbdWPM1sk6azzjz0PLb36r0FQL1Z6K90D6K4xeJE45BGzmO6Oaeh81R30kBiBkmIdUSbyOHIdmjs0cgPfmVIO/osxQf5Q2JopaqF16omfTFUROAqGt6B4J+rHfOT5q2hu7JjhlBc2uHNslI5mPc7IJNRIKUmaRwEJ/1h6M/ren+C+R0girZqhjiPFaGyxncEjk7yO/uuyMyv3ezwx0bkOJ9eigPpq63j/NgZUU45Usr9Jj8mP6D+qdvRQWn857psNzy/nKz1RxJVwjDuGbyZPysja4H/mBwqetpuK+LGmnqIhYLU7aXD9VRKO2RsB5KjORNn434hmtkAItEFdJVVUg/C8/gb6ktBAHqV61GxsbGsjaGsaNLWjoOyhWOz0Nit7KK2wiOJu5P7zz3J6lT0BERQEREBERAREQEREBERARQRc4zKWmCcRCbwfHIbo15x3zjO2cKadgSeQGUH1Bty6clEoax1bFHM2lnihkYHskk0gOBGRyJPIjopEsjIYnyyODWMaXOJ6AIOafb7Lpo6llZSxVMQcGSNyGvGHN7gjoQcg+YXJ08balkBzrexzx2wCAf4hB2YHZBschdcEzJ/E0Z/ZvdG7P5hzUesrzSzRR/KVEviuDGOj0YLsE43I6AoJiL405aDgjI5HmFFjuEEhha3WXzPcxsePqBbnUSOgG2/mO6CWiIgIiICIiAiIgIiICIiCk/oiX5x0gbTNzVGcTBztYGc4wduW3uro7ggbZBHovqIKyy26W3xMifFTANiawyROeS8gAbg/dSrhSuq4Gwa9EbngyEcy0HOPcgKT68lC/o/lplIABGnH08z09/4IVzoKN1G6oaJTJHJKZW6zlwcfxZPmd/cr5WU8zp4amlMfixNcwtkzpc04PTcbgFcTQucG6ql+WtwHNGOud9+a+uoM07YfGcNLdOW7Z80R2UFO+mhc2RwfI+R8ry3YZceQ8uiVdO6aaie1wHgVAlIPNwDHtwP7WfZdLLeGzMkEpy050kbH+fNTkU6KJBRNiulVWDTmeONu3Mac5+/wBP2HZS0QEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//2Q==" width="80px" />
                        <div className="">
                            <ul className="d-flex gap-5 text-light">
                                <Navlink color={"text-white"}>Beranda</Navlink>
                                <Navlink color={"text-white"}>Produk</Navlink>
                                <Navlink color={"text-white"}>Tentang</Navlink>
                            </ul>
                        </div>
                        <div className="d-flex gap-3">
                            <i className="text-light fa-brands fa-youtube"></i>
                            <i className="text-light fa-brands fa-facebook"></i>
                            <i className="text-light fa-brands fa-twiter"></i>
                            <i className="text-light fa-brands fa-instagram"></i>
                            <i className="text-light fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                    <div className="text-center py-4 text-light">
                        Website Bisnis @ 2024 All right reversed
                    </div>
                </div>
            </div>


        </footer>
    );
}