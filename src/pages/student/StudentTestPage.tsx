import styled from "@emotion/styled";
import { TestCard } from "../../components/tests/TestCard";

const Grid = styled.div`
  display: grid;
  grid-template-colums: 1fr 1fr;
  gap: 20px;
`

export function StudentTestPage() {
  return (
    <Grid>
      <TestCard/>
    </Grid>
  )
}