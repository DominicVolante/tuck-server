CREATE TABLE symptoms(
    id uuid DEFAULT uuid_generate_v4 (),
    name TEXT NOT NULL,
    severity NUMBER NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
);

INSERT INTO symptoms (name, severity, description)
VALUES
    (
        'Fly-Biting',
        1,
        'normal biting at nothing'
    ),
    (
        'Fly-Biting',
        2,
        'checking the door'
    ),
    (
        'Fly-Biting',
        3,
        'checking door, running around'
    ),
        (
        'Fly-Biting',
        5,
        'yelping, hiding under the bed, biting his butt, checking the door, not responding to us'
    );