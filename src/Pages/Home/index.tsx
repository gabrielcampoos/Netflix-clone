import { Box, Button, Link, TextField } from "@mui/material";
import pipoca from "../../assets/images/pipoca.png";
import starter from "../../assets/images/starter.gif";
import SimpleAccordion from "../../config/components/Accordion";
import { Background } from "../../config/components/Background";
import Text from "../../config/components/Title";

// Assista onde quiser. Cancele quando quiser.

// Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.

const Home = () => {
  return (
    <>
      <Background>
        <Box>
          <Text variant="h3" component={"h1"}>
            Filmes, séries e muito mais, sem limites
          </Text>
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <Text
              variant="h5"
              component={"p"}
              sx={{
                padding: "32px",
              }}
            >
              Assista onde quiser. Cancele quando quiser.
            </Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text variant="h6" component="h3">
              Quer assistir? Informe seu email para criar ou reiniciar sua
              assinatura.
            </Text>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
                width: "100%",
              }}
            >
              <TextField
                sx={{
                  backgroundColor: "rgba(0, 0, 0, .5)",
                  color: "white",
                  input: { color: "white" },
                  width: "60%",
                  "&:focus-within fieldset, &:focus-visible fieldset": {
                    border: "1px solid #fff !important",
                  },
                }}
                placeholder="E-mail"
              />
              <Button
                sx={{
                  padding: "8px 16px 8px 16px",
                  marginLeft: "4px",
                  width: "20%",
                  height: "56px",
                  fontSize: "20px",
                  backgroundColor: "red",
                }}
                variant="contained"
              >
                Vamos lá &gt;
              </Button>
            </Box>
          </Box>
        </Box>
      </Background>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "144px",
          position: "relative",
          top: "-70px",
          zIndex: "999",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "144px",
            // position: "relative",
            // top: "-70px",
            display: "flex",
            justifyContent: "center",
            background:
              "radial-gradient( 51.39% 511.66% at 47.68% -217.91%, #ff9900 0%, #e50914 17.27%, #0e1b4f 79.44%, #000413 100% )",
            boxShadow: "0px -8px 25px rgba(0, 0, 0, 0.5)",
            borderRadius: "4px",
            margin: "0 74px",
            color: "white",
            padding: "22px",
          }}
        >
          <Box
            sx={{
              width: "150px",
              height: "100px",
              backgroundImage: `url(${pipoca})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></Box>
          <Box
            sx={{
              padding: "10px",
            }}
          >
            <Text
              variant="h5"
              component="p"
              sx={{
                fontWeight: "bold",
              }}
            >
              A Programação que você adora.
            </Text>
            <Text
              variant="h6"
              component="p"
              sx={{
                fontSize: "1rem",
              }}
            >
              Venha fazer parte dessa comunidade.
            </Text>
            <Link href="#" fontSize={20}>
              Saiba mais &gt;
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100vw",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <Box>
          <Text
            variant="h3"
            component="p"
            sx={{
              marginBottom: "20px",
            }}
          >
            Aproveite as promoções.
          </Text>
          <Text variant="h6" component="p">
            Varios cursos por um preço especial, para mais informações entre{" "}
            <br /> em contato.
          </Text>
        </Box>
        <Box
          sx={{
            width: "40vw",
            height: "50vh",
            backgroundImage: `url(${starter})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            marginLeft: "2rem",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: "100vw",
          height: "50vh",
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10rem",
          marginTop: "10rem",
          borderTop: ".5rem solid gray",
          paddingTop: "8rem",
        }}
      >
        <Box>
          <Text
            variant="h3"
            component="p"
            sx={{
              marginBottom: "20px",
            }}
          >
            Aproveite as promoções.
          </Text>
          <Text variant="h6" component="p">
            Varios cursos por um preço especial, para mais informações entre{" "}
            <br /> em contato.
          </Text>
        </Box>
        <Box
          sx={{
            width: "40vw",
            height: "50vh",
            backgroundImage: `url(${starter})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: "100vw",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10rem",
          marginTop: "10rem",
          borderTop: ".5rem solid gray",
          paddingTop: "8rem",
        }}
      >
        <Box>
          <Text
            variant="h3"
            component="p"
            sx={{
              marginBottom: "20px",
            }}
          >
            Aproveite as promoções.
          </Text>
          <Text variant="h6" component="p">
            Varios cursos por um preço especial, para mais informações entre{" "}
            <br /> em contato.
          </Text>
        </Box>
        <Box
          sx={{
            width: "40vw",
            height: "50vh",
            backgroundImage: `url(${starter})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: "100vw",
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTop: ".5rem solid gray",
        }}
      >
        <Box
          sx={{
            width: "50vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            variant="h3"
            component={"h1"}
            sx={{
              marginBottom: "2rem",
            }}
          >
            Filmes, séries e muito mais, sem limites
          </Text>
          {SimpleAccordion()}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              marginTop: "3rem",
            }}
          >
            <Text variant="h6" component="h3">
              Quer assistir? Informe seu email para criar ou reiniciar sua
              assinatura.
            </Text>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
                width: "100%",
              }}
            >
              <TextField
                sx={{
                  backgroundColor: "rgba(0, 0, 0, .5)",
                  color: "#000",
                  input: { color: "#000", backgroundColor: "white" },
                  width: "60%",
                  "&:focus-within fieldset, &:focus-visible fieldset": {
                    border: "3px solid #000 !important",
                  },
                }}
                placeholder="E-mail"
              />
              <Button
                sx={{
                  padding: "8px 16px 8px 16px",
                  marginLeft: "4px",
                  width: "20%",
                  height: "56px",
                  fontSize: "20px",
                  backgroundColor: "red",
                }}
                variant="contained"
              >
                Vamos lá &gt;
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export { Home };
