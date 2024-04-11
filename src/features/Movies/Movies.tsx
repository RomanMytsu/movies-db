import { connect } from "react-redux";
import { Movie, fetchNexPage, resetMovies } from "../../reducers/movies";
import { RootState } from "../../store";
import MovieCard from "./MovieCard";
import { Suspense, lazy, useCallback, useContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Container, Grid, LinearProgress } from "@mui/material";
import { AuthContext, anonymousUser } from "../../AuthContext";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const MoviesFilter = lazy(() => import("./MoviesFilter"));

interface MoviesProps {
  movies: Movie[];
  loading: boolean;
}

function Movies({ movies, loading }: MoviesProps) {
  const [filters, setFilters] = useState<any>();
  const dispatch = useAppDispatch();
  const { user } = useContext(AuthContext);
  const loggedIn = user !== anonymousUser;
  const hasMorePages = useAppSelector((state) => state.movies.hasMorePages);

  const [targetRef, entry] = useIntersectionObserver();

  useEffect(() => {
    dispatch(resetMovies());
  }, [dispatch]);

  useEffect(() => {
    if (entry?.isIntersecting && hasMorePages) {
      const moviesFilter = filters
        ? {
            keywords: filters.keywords.map((k: any) => k.id),
            genres: filters?.genres,
          }
        : undefined;
      dispatch(fetchNexPage(moviesFilter));
    }
  }, [dispatch, entry?.isIntersecting, filters, hasMorePages]);

  const handleAddFavorite = useCallback(
    (id: number) => {
      alert(`Not implemented! Action: ${user.name} is adding movie ${id} to favorites.`);
    },
    [user.name]
  );

  return (
    <Grid container spacing={2} sx={{ flexWrap: "nowrap" }}>
      <Grid item xs="auto">
        <Suspense>
          <MoviesFilter
            onApply={(f) => {
              dispatch(resetMovies());
              setFilters(f);
            }}
          />
        </Suspense>
      </Grid>
      <Grid item xs={12}>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {movies.map((m, i) => (
              <Grid item key={`${m.id} - ${i}`} xs={12} sm={6} md={4}>
                <MovieCard
                  key={m.id}
                  id={m.id}
                  title={m.title}
                  overview={m.overview}
                  popularity={m.popularity}
                  image={m.image}
                  enableUserActions={loggedIn}
                  onAddFavorite={handleAddFavorite}
                />
              </Grid>
            ))}
          </Grid>
          <div ref={targetRef}>
            <LinearProgress color="secondary" sx={{ mt: 3 }} />
          </div>
        </Container>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
  loading: state.movies.loading,
});

const connector = connect(mapStateToProps);
export default connector(Movies);
