import type {Ref} from "vue";

export type GridData = {
    regNo?: string
    househldNm?: string
    resignAdjDt?: string
    eisYn?: string
    sexTp?: string
    resTp?: string
    emailId?: string
    rsightQty?: string
    heightQty?: string
    deptNm?: string
    paystepCd?: string
    insertDatetime?: string
    grJoinDt?: string
    insertUserId?: string
    bizplcCd?: string
    weightQty?: string
    rankNm?: string
    addr?: string
    epsYn?: string
    ceoYn?: string
    birthDt?: string
    lsightQty?: string
    updateDatetime?: string
    npsYn?: string
    empNm?: string
    updateUserId?: string
    empTp?: string
    gradeCd?: string
    sexTpNm?: string
    corpCd?: string
    empNo?: string
    npTp?: string
    deptCd?: string
    empHnm?: string
    resCountryCd?: string
    joinDt?: string
    ltcYn?: string
    nhisYn?: string
    jobkindCd?: string
    lofoTp?: string
    rankCd?: string
    tenureTp?: string
}

export type KwGrid = {
    listRef: Ref<any[]>,
    columns: Ref<any[]>,

}
