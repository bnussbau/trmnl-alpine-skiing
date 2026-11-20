const SPORT_EVENT_FIELDS = ['EventDate', 'DisciplineId','GenderId', 'LocationName', 'LocationNationName'];

function pickSportEventFields(item) {
    const out = {};
    for (const key of SPORT_EVENT_FIELDS) {
        if (Object.prototype.hasOwnProperty.call(item, key)) {
            out[key] = item[key];
        }
    }
    return out;
}

function run(input) {
    const output = input;

    const events = input?.IDX_1?.data;
    if (Array.isArray(events)) {
        output.IDX_1 = {
            ...input.IDX_1,
            data: events.map(pickSportEventFields),
        };
    }

    return output;
}