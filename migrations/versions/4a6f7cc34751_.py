"""empty message

Revision ID: 4a6f7cc34751
Revises: 20f8aa6f3f18
Create Date: 2020-09-13 19:53:18.948664

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4a6f7cc34751'
down_revision = '20f8aa6f3f18'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('wines', sa.Column('url', sa.String(length=200), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('wines', 'url')
    # ### end Alembic commands ###
