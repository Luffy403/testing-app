import type { TestItem } from "../../types/testing"

type TestCardProp = {
    test: TestItem;
}

export function TestCard(props : TestCardProp){
    const { test } = props;
    return <div>TestCard</div>
}