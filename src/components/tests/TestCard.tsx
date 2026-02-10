import type { TestItem } from "../../types/testing"

type TestCardProp = {
    test: TestItem;
}

export function TestCard(props : TestCardProp){
    const { test } = props;
    return <h3>{test.title}</h3>
}